//! Insert Inside the Heap

// We are having Min heap and we want to insert 1 in the heap
// to ham kaha insert karenge 1 ko, 10 ke right me, because order hmesha left side s fill hota hai, to ham 1 ko 10 ke right me insert karenge, but 1 is less than 10, so we will swap 1 and 10, then we will compare 1 with its parent which is 5, and since 1 is less than 5, we will swap 1 and 5, now the heap will be like this:

//     5
//   /   \
//  10     20
//  /
// 30

//? After inserting 1, and swapping it with 10 and then with 5, the heap will be like this:
//     1
//   /   \
//  5     20
// /  \
// 30  10

//* This process is called "heapify up" or "bubble up", where we compare the inserted element with its parent and swap if it is less than the parent, and we continue this process until we find the correct position for the inserted element.
//TODO: Remeber Formullas = 
//TODO: for going to left child, we do 2*i + 1 and 
//TODO: for going to right child, we do 2*i + 2, and 
//TODO: for going to parent, we do Math.floor((i-1)/2) [that is for 0 based indexing]

//TODO: for 1 Indexing, for going to left child, we do 2*i and
//TODO: for going to right child, we do 2*i + 1, and
//TODO: for going to parent, we do Math.floor(i/2)

//! In code we do like this [we are creating Min Heap]

// ham ek class banayege MinHeap ke naam se, jiske andar ek constructor hoga, constructor matlab jab bhi hum MinHeap ka object banayege, to wo cosntructor call hoga, 
// Javascript classes mein constructor ek special method hota hai, jo automatically call hota hai jab bhi hum class ka object banate hain, with the help of new keyword, to jab bhi hum new MinHeap() likhenge, to wo constructor call hoga, 


class MinHeap {
  constructor() {
    // this.heap = [];  //? jab hamre pass heap khali ho 
    //? but upar jo example tha wo bhara hua to hm usi example s smjhte h
    this.heap = [5, 10, 20, 30]; //? jab hamre pass heap bhara hua ho
  }

  //? ab kuch helper functions banayege , like we have to find left child, right child etc, so we will create some helper functions for that, and ye sare functions class ke andar honge

  // we are using 0 based indexing ok
  getLeftChildIndex(i) {
    return (2 * i) + 1;
  }
  getRightChildIndex(i) {
    return (2 * i) + 2;
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  //? now we create insert helper function, 
  insert(val) {
    //? first we will insert the value at the end of the heap,
    //? then we will heapify up the value to maintain the heap property
    this.heap.push(val);
    // calling helper function heapify up with the index of the last element which is the newly inserted element
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }
  heapifyUp(index) {
    // ham index par value ko uske parent ke sath compare karenge, agar wo chhota hai to swap karenge, aur phir uske parent ke index par jaake fir se compare karenge, jab tak hum root tak nahi pahuch jate ya fir jab tak hum correct position nahi mil jata
    //  we will start heapify process form the last index which is the index of the newly inserted element

    while (index > 0) {
      // finding parent index
      let parentIndex = this.getParentIndex(index);
      // comparing the value at index with the value at parent index , if the value at index is less than the value at parent index, then we will swap them, and update the index to parent index, so that we can continue the process until we find the correct position for the inserted element
      if (this.heap[index] < this.heap[parentIndex]) {
        // swap
        /* let temp = this.heap[index];
        this.heap[index] = this.heap[parentIndex];
        this.heap[parentIndex] = temp; */
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        // update index to parent index
        index = parentIndex;

        //? if the parent value is less than or equal to the current value, then we have found the correct position for the inserted element, so we can break the loop by else condition
      } else {
        break;
      }
    }
  }
}


//! Writtin the whole code in one place without comments
class MinHeap1 {
  constructor(i) {
    this.heap = [];
  }

  getLeftChildIndex(i) {
    return (2 + i) + 1;
  }
  getRightChildIndex(i) {
    return (2 * i) + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2)
  }

  insert(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1
    this.heapifyUp(lastIndex);
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);
      if (this.heap[i] < this.heap[parentIndex]) {
        [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]];
        i = parentIndex
      } else { break; }
    }
  }
}

// for checking the code
let minHeap = new MinHeap1();
minHeap.insert(5);
minHeap.insert(10);
minHeap.insert(20);
minHeap.insert(30);
minHeap.insert(1);
// console.log(minHeap.heap);

let heap1 = new MinHeap1();
heap1.insert(12);
heap1.insert(7);
heap1.insert(23);
heap1.insert(34);
heap1.insert(3);
// console.log(heap1.getLeftChildIndex(0));
// console.log(heap1.getRightChildIndex(2));
// console.log(heap1.heap);

//!----------------------------------------------------------

//! Deleting/Extracting Elements from a heap

// we are having a min heap theek hai, aur hme minimum element ko delete karna hai, to minimum element hamesha root par hota hai, to ham root par jo element hai usko delete karenge, but agar ham root par jo element hai usko delete karenge to heap ka structure kharab ho jayega, to hm heap ke sabse last element ko delete karenge,

// kaise, dekho ham replace karege heap ki last value ko root se, and delete that last element , par ab hamara heap structure kharab ho jayega, to ham heapify down karenge, heapify down matlab ham root se start karenge, aur usko uske left child aur right child ke sath compare karenge, aur jo bhi chhota hoga uske sath swap karenge, aur phir uske index par jaake fir se compare karenge, jab tak hum leaf node tak nahi pahuch jate ya fir jab tak hum correct position nahi mil jata

// ? for example, hamare pass min heap hai, 1,4,5, 10 ,20 aur hme minimum element ko delete karna hai, to minimum element hai 1, to ham 1 ko delete karenge, aur ham heap ke last element ko root par le aayenge, to ham 20 ko root par le aayenge, aur phir ham heapify down karenge, to ham 20 ko uske left child 4 aur right child 5 ke sath compare karenge, jo bhi jyada chota hoga uske sath process karege, to 4 chhota hai to ham 20 aur 4 ko swap karenge, to ab hamara heap kuch is tarah dikhega:

//     4
//   /   \
//  20     5
// /
// 10

//? ab ham 20 ko uske left child 10 ke sath compare karenge, aur since 10 is less than 20, to ham 20 aur 10 ko swap karenge, to ab hamara heap kuch is tarah dikhega:

//     4
//   /   \
//  10     5
// /
// 20

//* Code for deleting minimum element from the heap [we use same above code for creating the heap and inserting elements in the heap, we will add a new helper function for deleting minimum element from the heap]

class MinHeap2 {
  constructor(i) {
    this.heap = [];
  }

  getLeftChildIndex(i) {
    return (2 * i) + 1;
  }

  getRightChildIndex(i) {
    return (2 * i) + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);
      if (this.heap[i] < this.heap[parentIndex]) {
        [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]];
        i = parentIndex;
      }
      else { break; }
    }
  }

  deleteMin(i) {
    if (this.heap.length === 0) {
      return null; //? if heap is empty, then we cannot delete minimum element
    } else if (this.heap.length === 1) {
      return this.heap.pop(); //? if heap has only one element, then we can simply pop that element and return it
    } else {
      let min = this.heap[0]; //? minimum element is at root [because we are having min heap theek hai], so we will store that minimum element in a variable, so that we can return it at the end of the function
      //* now we replace the last element of the heap with the root element, and then we will use heapify down to maintain the heap property
      let lastIndex = this.heap.length - 1; //? finding the index of the last element in the heap
      [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]]; //? swapping the last element with the root element
      this.heap.pop(); //? remove the last element (which is now the minimum element)

      this.heapifyDown(0); //? heapify down from root to maintain heap property
      // we are sending 0 not i because we want to start heapify down from root not from any other index
      return min; //? return the minimum element that we deleted
    }
  }

  heapifyDown(i) {
    //? now we have to compare the value at index i ,and ham usko uske left child aur right child ke sath compare karenge, aur jo bhi chhota hoga uske sath swap karenge, aur phir uske index par jaake fir se compare karenge, jab tak hum leaf node tak nahi pahuch jate ya fir jab tak hum correct position nahi mil jata
    let leftChildIndex = this.getLeftChildIndex(i);
    let rightChildIndex = this.getRightChildIndex(i);

    //? lets assume that the smallest element is at index i, ab hum compare karenge value at index i with the value at left child index and right child index, 
    let smallest = i;

    //! hme ye comparision and swapping heap ki length tak hi rakhni h wrna undefined store hone lagega heap me,
    let heapLength = this.heap.length;

    if (leftChildIndex < heapLength && this.heap[leftChildIndex] < this.heap[smallest]) {
      //? agar left child value i se chhota hai to ham smallest ko left child index se update karenge
      smallest = leftChildIndex;
    }
    if (this.heap[rightChildIndex] < this.heap[smallest]) {
      //? agar right child value i se chhota hai to ham smallest ko right child index se update karenge
      smallest = rightChildIndex;
    }
    //? ab ham compare karenge smallest index with the current index i, agar smallest index i se different hai to ham swap karenge, aur phir ham heapify down ko recursively call karenge smallest index par, taki hum correct position tak pahuch jaye
    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this.heapifyDown(smallest);
    }
  }
}

// for checking the code
let minHeap2 = new MinHeap2();
minHeap2.insert(5);
minHeap2.insert(22);
minHeap2.insert(10);
minHeap2.insert(20);
minHeap2.insert(30);
// console.log(minHeap2.heap);
// console.log(minHeap2.deleteMin());
// console.log(minHeap2.heap);


//! One more Operation in heap is 'Peek' operation, jisme hum minimum element ko dekh sakte hain bina usko delete kiye, to peek operation me hum simply root element ko return karenge, kyuki minimum element hamesha root par hota hai, to ham ek helper function banayege peek ke naam se, jisme hum simply root element ko return karenge

class MinHeap3 {
  constructor(i) {
    this.heap = [];
  }

  getLeftChildIndex(i) {
    return (2 * i) + 1;
  }
  getRightChildIndex(i) {
    return (2 * i) + 2;
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);
      if (this.heap[i] < this.heap[parentIndex]) {
        [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]];
        i = parentIndex;
      } else { break; }
    }
  }

  deleteMin() {
    if (this.heap.length === 0) {
      return null;
    } else if (this.heap.length === 1) {
      return this.heap.pop();
    } else {
      let min = this.heap[0];
      let lastIndex = this.heap.length - 1;
      [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];
      this.heap.pop();
      this.heapifyDown(0);
      return min;
    }
  }

  heapifyDown(i) {
    let leftChildIndex = this.getLeftChildIndex(i);
    let rightChildIndex = this.getRightChildIndex(i);
    let smallest = i;
    let heapLength = this.heap.length;
    if (leftChildIndex < heapLength && this.heap[leftChildIndex] < this.heap[smallest]) {
      smallest = leftChildIndex;
    }
    if (rightChildIndex < heapLength && this.heap[rightChildIndex] < this.heap[smallest]) {
      smallest = rightChildIndex;
    }
    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this.heapifyDown(smallest);
    }
  }

  peek() {
    if (this.heap.length === 0) {
      return null; //? if heap is empty, then we cannot peek minimum element
    }
    return this.heap[0];
  }
}

// for checking the code
let minHeap3 = new MinHeap3();
console.log("Peeking")
minHeap3.insert(5);
minHeap3.insert(22);
minHeap3.insert(10);
minHeap3.insert(20);
minHeap3.insert(30);
// console.log(minHeap3.heap);
// console.log(minHeap3.peek());
// console.log(minHeap3.heap);


//?-------------------------------------------------------------
//*-----------------
//! Heap Sort
//*-----------------

// Heap sort ek comparison based sorting algorithm hai, jisme hum heap data structure ka use karte hain to sort an array,
//? man lo hamare pass ek array hai, [5, 22, 10, 20, 30], aur hme is array ko sort karna hai, agar ham ise minheap ke form me convert kar dete hain, to hamara heap kuch is tarah dikhega:

//     5
//   /   \
//  22     10
// /  \
//20   30

//? agar ham is max heap ke form me convert kar dete hain, to hamara heap kuch is tarah dikhega:

//     30
//   /   \
//  22     10
// /  \
//20   5

// to hme array/heap ko pehle min heap ya max heap me change krna h according to our need
// array ke last mein badi value chahiye to asceding order, choti value chahiye to descending order
//TODO:  to fir before sort array we have to create max Heap or min Heap

//! steps -
//? 1. Create Max/Min Heap from Arr
// now if we have to sort this array in ascending order so where this maximum value go, in the end
//? 2. swap the first and last value
// ab right most value means the last value is in corrected place to uske aage s hme check krna hoga mtlb pichla reduce
// matalb hm same space use kr rhe h to sort the array bs ab array ki length mein hm last value count nahi karege bs
//? 3. reduce the size of heap
// ab hm heapify krege because small value start m to h, pr baki ki values arranged nahi h, order maintain nahi ho rha h
//* jab hm heap se delete/extract kr rhe the upar , same wahi concept/ wahi algorithm yaha lagega
//? 4. heapify down process
// delete last node , swap with root node and use heapify down
// mean now after that process , we got our maxHeap so we again swap first value with the second last , because last one is already in correct order and we will continue from step 2
//? 5. Keep repeating steps [step 2 to step 4] until full array is sorted


//! Now the main condition is we have to create min/max heap
//TODO: Create a maxHeap outof array
// how we create it lets see
// we have this arr [4,10,5,3,1] and we have to create a max heap for this

// for that array we create heap and do heapify and again put into array
//? so array mein rakhne ke liye extra space chahiye hoga wo bhi S-O(n) beacause we dont know the length of array
//* Now , the challenge it , can we perform same thing without using extra array
//TODO: Create a maxHeap outof array without using extra space S-O(1) [and we already know how to add/insert elem in heap]

// heapify not work here, so what we do -  we use algorithm , in that
// - we will start from end of the heap , and we will heapify down every node
// on which leaf nodes do not have any childern mean it is already a maxHeap and on which leaf nodes heapify do not makes any changes, just ignore those leaf nodes and goes up and comparing from their left and right child that, is that big or not if big ignore, if not swap because we are using maxheap na, if we are using minheap to min value check krte while comparing - any u got maxHeap

//? Reason why we start from end  - when we are starting from end , we are making sure that the right side element are alreay max heap


//! --------------------------------------

//! Heap sort code
// array - [4,10,3,5,1] sorting this array using heap sort without using the extra space

//* 4 step
//? step 1 - create min/max heap
// for creating maxheap - we run a loop from last to start , and make sure each of the subtree that we'll encounter already a max heap. [meap making sure that each and every subtree is maxheap]
// in array i take last elem and try to heapify down and make sure that become the max heap, make sure each tree and subtree becoming the max heap, we omit/leave the leaf node
// [10, 5, 3, 4, 1]
//? step 2 - sort
// extract max elem one by one and store at the end [means replace with last elem]  -  [1, 5, 3, 4, 10], now i have to heapify down also so it become - [5, 4, 3, 1 ,10] now this is a maxheap , so we put again first elem in the last and heapify down and 
//? step 3 - reduce the size of heap
// we reduce the heap/array length by 1 because from end one elem is already sorted and we reduced it from end 
//? step 4 - heapify down process
// looping the whole things till we found the sorted array  = Final - [1, 3, 4, 5, 10]


//! code
// we are any unsorted array
console.log('----------Heap Sort-------------')

let arr = [1, 4, 10, 5, 3, 7, 9, 2]

function heapSort(arr) {

  let n = arr.length;
  // create a max heap
  // run a loop from end to front and heapify down for getting maxHeap array 
  for (let i = n - 1; i >= 0; i--) {
    // we have to hepify each and every value
    heapifyDown(arr, i, n); // heapify the array, and the ith value
  }
  // sort the array 
  // again
  // run a loop from end to front and heapify down for getting final sorted array
  // when the single node left in heap or single value left in array stop loop so we run loop till 0 not = to 0
  for (let i = n - 1; i > 0; i--) {
    // swap first node from last
    // heapify process and reduce the heap size and continue
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, 0, i);
  }
  return arr;
}

// this takes log n time 
function heapifyDown(arr, i, n) {
  // let assume i is our largest value, and we have to compare it with left and right whatever big is
  let largest = i;
  let left = (2 * i) + 1;
  let right = (2 * i) + 2;

  // making sure that left/right child in the range, not undefined
  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;
  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyDown(arr, largest, n);
  }
}


let ans = heapSort(arr)
console.log(ans)

//* How to find leaf nodes
//? just count the nodes in binary tree -> 'n' and then divide by 2 and u get parent
// means jo bhi result aaya wo parent and jo bhi bacha wo leaf
//? Example


//          1                 => Node count 1
//       /      \
//      5          7          => Node count 1 + 2= 3
//    /  \       /   \
//   4    3     2     8       => Node count 3 + 4 = 7
//  / \  / \    /
// 0  20 21 23  0             => Node count 7 + 5 = 12

// n = 12 just do n/2  ==> 12/2 means 6 [always take math.floor value] so there are 6 parent and rest of are children
//! [Optimisation for big length of array] 
//* so in above function heap sort - we are creating maxHeap by running loop . so we can use n/2 formulla means only for parents, because rest of them are leafs, and hmne already ,mention kiya h leaf ko ignore karo bcz unke left/right child h hi nahi to unko kisse compare karoge
//? to use this
for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
  // we have to hepify each and every value
  heapifyDown(arr, i, n); // heapify the array, and the ith value
}

//? instead of this
for (let i = n - 1; i >= 0; i--) {
  // we have to hepify each and every value
  heapifyDown(arr, i, n); // heapify the array, and the ith value
}