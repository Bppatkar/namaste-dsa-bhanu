//! Operation in Heap

//? Like in Stack we have push and pop, in Heap we have insert and remove and peek
//? Like in Queue we have enqueue and dequeue means insert by push and remove by shift because we can't use pop in queue


//* Same there is some restriction in Heap , we can't perform random things in heap , we can only insert and remove the root node in heap and we can't remove any random node in heap because it will break the structure of heap and also the property of heap

//* We only allow to insert element in the heap [but in correct position according to the property of heap]
//* We only allow to remove/extract element in the heap
//TODO: whenever we remove/extract element from the heap we always remove the root node because it is the highest priority element in max heap and lowest priority element in min heap and after removing the root node we need to maintain the structure of heap and also the property of heap by performing heapify down operation in simple words hme sabse last element ko root node pe leke aana hai aur phir heapify down karna hai taki heap ka structure aur property dono maintain rahe

//? mein tumhe heapify down or up dono samjhata hu ok
//? heapify down means jab hum root node ko remove karte hai to hum sabse last element ko root node pe leke aate hai aur phir usko remove karte hai taki heap ka structure aur property dono maintain rahe
//? heapify up means jab hum new element ko insert karte hai to hum usko sabse last position pe insert karte hai aur phir usko parent node ke sath compare karte hai agar new element ka value parent node se zyada hai to hum usko parent node ke sath swap karte hai aur phir usko parent node ke sath compare karte hai jab tak new element ka value parent node se zyada nahi hota hai ya phir hum root node tak nahi pahuch jate hai

//* We only allow to peek element in the heap