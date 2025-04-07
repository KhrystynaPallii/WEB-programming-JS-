const SortLib = {
    hasUndefined(arr) {
      let hasUndefined = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
          hasUndefined = true;
          break;
        }
      }
      return hasUndefined;
    },
  
    moveUndefinedToEnd(arr) {
      let i = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== undefined) {
          arr[i] = arr[j];
          if (i !== j) arr[j] = undefined; 
          i++;
        }
      }
    },
  
    exchangeSort(arr, ascending = false) {
      let comparisons = 0, swaps = 0;
      if (this.hasUndefined(arr)) this.moveUndefinedToEnd(arr); 
  
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
          if (arr[j] == null || arr[j + 1] == null) continue;
          comparisons++;
          if ((ascending && arr[j] > arr[j + 1]) || (!ascending && arr[j] < arr[j + 1])) {
            let tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
            swaps++;
          }
        }
      }
      console.log(`Метод Обміну: Порівнянь: ${comparisons}, Обмінів: ${swaps}`);
      console.log(`Результат сортування (Обміну): [${arr.join(", ")}]`);
      return arr;
    },
  
    selectionSort(arr, ascending = true) {
      let comparisons = 0, swaps = 0;
      if (this.hasUndefined(arr)) this.moveUndefinedToEnd(arr); 
  
      for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] == null || arr[min] == null) continue;
          comparisons++;
          if ((ascending && arr[j] < arr[min]) || (!ascending && arr[j] > arr[min])) {
            min = j;
          }
        }
        if (min !== i) {
          let tmp = arr[i];
          arr[i] = arr[min];
          arr[min] = tmp;
          swaps++;
        }
      }
  
      console.log(`Метод Вибору: Порівнянь: ${comparisons}, Обмінів: ${swaps}`);
      console.log(`Результат сортування (Вибору): [${arr.join(", ")}]`);
      return arr;
    },
  
    insertionSort(arr, ascending = true) {
      let comparisons = 0, swaps = 0;
      if (this.hasUndefined(arr)) this.moveUndefinedToEnd(arr);
  
      for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        if (current == null) continue;
        let j = i;
        while (
          j > 0 &&
          arr[j - 1] != null &&
          ((ascending && arr[j - 1] > current) || (!ascending && arr[j - 1] < current))
        ) {
          comparisons++;
          arr[j] = arr[j - 1];
          j--;
          swaps++;
        }
        if (j > 0) comparisons++;
        arr[j] = current;
        swaps++;
      }
  
      console.log(`Метод Вставками: Порівнянь: ${comparisons}, Переміщень: ${swaps}`);
      console.log(`Результат сортування (Вставками): [${arr.join(", ")}]`);
      return arr;
    },
  
    shellSort(arr, ascending = true) {
      let comparisons = 0, swaps = 0;
      if (this.hasUndefined(arr)) this.moveUndefinedToEnd(arr); 
  
      let gap = Math.floor(arr.length / 2);
      while (gap > 0) {
        for (let i = gap; i < arr.length; i++) {
          let temp = arr[i];
          if (temp == null) continue;
          let j = i;
          while (
            j >= gap &&
            arr[j - gap] != null &&
            ((ascending && arr[j - gap] > temp) || (!ascending && arr[j - gap] < temp))
          ) {
            comparisons++;
            arr[j] = arr[j - gap];
            j -= gap;
            swaps++;
          }
          if (j >= gap) comparisons++;
          arr[j] = temp;
          swaps++;
        }
        gap = Math.floor(gap / 2);
      }
  
      console.log(`Метод Шелла: Порівнянь: ${comparisons}, Переміщень: ${swaps}`);
      console.log(`Результат сортування (Шелла): [${arr.join(", ")}]`);
      return arr;
    },
  
    quickSort(arr, ascending = true) {
        let comparisons = 0, swaps = 0;
        function swap(i, j) {
          let tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
          swaps++;
        }
      
        function partition(left, right) {
          let pivot = arr[Math.floor((left + right) / 2)];
          let i = left;
          let j = right;
      
          while (i <= j) {
            while (
              (arr[i] !== undefined) &&
              (pivot !== undefined) &&
              ((ascending && arr[i] < pivot) || (!ascending && arr[i] > pivot))
            ) {
              comparisons++;
              i++;
            }
      
            while (
              (arr[j] !== undefined) &&
              (pivot !== undefined) &&
              ((ascending && arr[j] > pivot) || (!ascending && arr[j] < pivot))
            ) {
              comparisons++;
              j--;
            }
      
            if (i <= j) {
              swap(i, j);
              i++;
              j--;
            }
          }
          return i;
        }
      
        function quick(left, right) {
          if (left < right) {
            let index = partition(left, right);
            if (left < index - 1) quick(left, index - 1);
            if (index < right) quick(index, right);
          }
        }
        quick(0, arr.length - 1);
        if (this.hasUndefined(arr)) this.moveUndefinedToEnd(arr);

        console.log(`Метод Хоара: Порівнянь: ${comparisons}, Обмінів: ${swaps}`);
        console.log(`Результат сортування (Хоара): [${arr.join(", ")}]`);
        return arr;
      }
    }
      
  window.onload = function () {
    function generateDenseArray(length) {
      const arr = [];
      for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 1000));
      }
      return arr;
    }
  
    function generateSparseArray(length, undefinedCount = 10) {
      const arr = generateDenseArray(length);
      for (let i = 0; i < undefinedCount; i++) {
        const index = Math.floor(Math.random() * length);
        arr[index] = undefined;
      }
      return arr;
    }
  
    const denseArray = generateDenseArray(100);
    const sparseArray = generateSparseArray(100, 15);
  
    console.log("=== Нерозріджений масив ===", denseArray.slice());
    SortLib.exchangeSort([...denseArray]);
    SortLib.selectionSort([...denseArray]);
    SortLib.insertionSort([...denseArray]);
    SortLib.shellSort([...denseArray]);
    SortLib.quickSort([...denseArray]);
  
    console.log("\n=== Розріджений масив ===", sparseArray.slice());
    SortLib.exchangeSort([...sparseArray]);
    SortLib.selectionSort([...sparseArray]);
    SortLib.insertionSort([...sparseArray]);
    SortLib.shellSort([...sparseArray]);
    SortLib.quickSort([...sparseArray]);
  };
  
