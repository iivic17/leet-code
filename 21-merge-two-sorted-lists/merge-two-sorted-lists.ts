  function mergeTwoLists(list1: ListNode | null, list2: ListNode | null) {
    if (!list1 && !list2) return null
    else if (!list1) return list2
    else if (!list2) return list1

    let mergedList: ListNode | null = null;

    let c1: ListNode | null = list1;
    let c2: ListNode | null = list2;

    let l: ListNode | null = c1.val <= c2.val ? c1 : c2

    mergedList = new ListNode(l.val);
    if (l.next) {
      l.val = l.next.val;
      l.next = l.next.next;
    } else if (c1 && c2) {
      if (c1.val <= c2.val) c1 = null
      else c2 = null
    } else if (c1) c1 = null
      else c2 = null

    let current : ListNode | null = mergedList

    while (c1 || c2) {
      if (c1 && c2) l = c1.val <= c2.val ? c1 : c2
      else l = (c1 || c2) as ListNode
      current.next = new ListNode(l.val)
      current = current?.next
      if (l.next) {
        l.val = l.next.val
        l.next = l.next.next
      } else if (c1 && c2) {
          if (c1.val <= c2.val) c1 = null
          else c2 = null
        } else if (c1) c1 = null
          else c2 = null
    }

    return mergedList
  }