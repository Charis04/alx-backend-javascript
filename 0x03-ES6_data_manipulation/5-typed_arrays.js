export default function createInt8TypedArray(length, posit, val) {
  // Check if the position is valid, otherwise throw an error
  if (posit < 0 || posit >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);

  // Create a new DataView to manipulate the ArrayBuffer
  const dataView = new DataView(buffer);

  // Set the Int8 value at the given position
  dataView.setInt8(posit, val);

  // Return the DataView
  return dataView;
}
