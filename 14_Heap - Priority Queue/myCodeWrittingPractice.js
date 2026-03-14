/* //! Creating heap with heapify funtion insertion and extraction and peeking

class minHeap {
  constructor(i) {
    this.heap = [];
  }

  getLeftChildIndex(i) {
    return (2 * i) + 1
  }
  getRightChildIndex(i) {
    return (2 * i) + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(i) {
    this.heap.push(i);
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);
      if (this.heap[i] < this.heap[parentIndex]) {
        [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]]
        i = parentIndex
      }
      else { break; }
    }
  }

  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
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

    if (smallest != i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this.heapifyDown(smallest)
    }

  }

  peek() {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }
}

// heap sort

let heapArr = [3, 4, 7, 12, -2, 5, 23, 16, 0];

function heapSort(arr) {
  let n = arr.length;

  // getting maxHeap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyDown(arr, i, n)
  }

  // sorting array 
  // loop till >0 not >=0 bcz root node ignore/ array single value ignore
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, 0, i) // because i heap ko reduce krta jayega isiliye length i bheji
  }
  return arr;
}


function heapifyDown(arr, i, n) {
  let largest = i;
  let left = (2 * i) + 1;
  let right = (2 * i) + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;
  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyDown(arr, largest, n)
  }
}

let ans = heapSort(heapArr);
console.log(ans); */


//! writing code again 
class minHeap {
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

  insert(i) {
    this.heap.push(i);
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);

  }
  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);
      if (this.heap[i] < this.heap[parentIndex]) {
        [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]]
        i = parentIndex;
      } else { break; }
    }
  }

  extract() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    else {
      let min = this.heap[0];
      let lastIndex = this.heap.length - 1;
      [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];
      this.heap.pop();
      this.heapifyDown(0);
      return min;
    }
  }

  heapifyDown(i) {
    let left = this.getLeftChildIndex(i);
    let right = this.getRightChildIndex(i);

    let smallest = i;
    let heapLength = this.heap.length;

    if (left < heapLength && this.heap[left] < this.heap[smallest]) {
      smallest = left
    }
    if (right < heapLength && this.heap[right] < this.heap[smallest]) {
      smallest = right
    }

    if (smallest != i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]]
      this.heapifyDown(smallest);
    }
  }


  peek() {
    if (this.heap.length === 0) return null;
    return this.heap[0]
  }
}

let minHeap2 = new minHeap();
minHeap2.insert(5);
minHeap2.insert(22);
minHeap2.insert(12);
minHeap2.insert(23);
minHeap2.insert(-3);
minHeap2.insert(33);
minHeap2.insert(98);
minHeap2.insert(7);
// console.log(minHeap2.heap);
// console.log(minHeap2.extract());
// console.log(minHeap2.extract());
// console.log(minHeap2.extract());
// console.log(minHeap2.heap);


//! heap sort

let sortingArr = [-3, 5, 12, 7, 22, 33, 98, 23];
function heapSort(arr) {
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, 0, i);
  }
  return arr;
}
function heapifyDown(arr, i, n) {
  let largest = i;
  let left = (2 * i) + 1;
  let right = (2 * i) + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;
  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyDown(arr, largest, n);
  }
}
let ans = heapSort(sortingArr);
console.log('after sorting')
console.log(ans);