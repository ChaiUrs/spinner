const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

const output = (array, count, repeat) => {
  setTimeout(() => {
    process.stdout.write(array[count % 4]);
    if (count < repeat) {
    output(array, ++count, repeat);
    }
  }, 50);
};
output(spinner, 0, 50);
