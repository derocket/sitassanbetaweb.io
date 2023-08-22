const generateButton = document.getElementById('generateButton');
const barcodeInput = document.getElementById('barcodeInput');
const barcodeDiv = document.getElementById('barcode');

generateButton.addEventListener('click', generateBarcode);

function generateBarcode() {
  const barcodeText = barcodeInput.value;
  if (barcodeText.trim() !== '') {
    const barcodeImage = document.createElement('img');
    
    // Generate barcode using JsBarcode
    JsBarcode(barcodeImage, barcodeText, {
      format: 'CODE128',  // You can choose a different barcode format
      displayValue: true // Display the barcode value below the barcode
    });
    
    barcodeDiv.innerHTML = '';
    barcodeDiv.appendChild(barcodeImage);
  }
}
