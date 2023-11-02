function generateInvoice() {
    event.preventDefault();

    let name = document.getElementById('fname').value;
    let phone = document.getElementById('phone').value;
    let province = document.getElementById('province').value;
    let tshirtCount = parseInt(document.getElementById('tshirt').value || 0);
    let jacketCount = parseInt(document.getElementById('jackets').value || 0);
    let capCount = parseInt(document.getElementById('cap').value || 0);

    // prices

    const tshirtPrice = 10; 
    const jacketPrice = 25;
    const capPrice = 5; 
    const taxRate = 0.13;

    // validations

    if (!/^\(\d{3}\)-\d{3}-\d{4}$/.test(phone)) {
        alert("Invalid phone format!");
        return false;
    }

    if (isNaN(tshirtCount) || isNaN(jacketCount) || isNaN(capCount) || tshirtCount < 0 || jacketCount < 0 || capCount < 0) {
        alert("Invalid quantity input!");
        return false;
    }

    // calculations

    let subtotal = (tshirtCount * tshirtPrice) + (jacketCount * jacketPrice) + (capCount * capPrice);
    let tax = subtotal * taxRate;
    var discount = 0;

    if (province === 'Ontario') {
        discount = subtotal * 0.10; 
    }
     let total = subtotal + tax - discount;


    // invoice

    var invoiceHTML = "<h2>Invoice:</h2>";
    invoiceHTML += "<table border='1' cellspacing='0' cellpadding='5'>";
    invoiceHTML += "<thead><tr><th>Item</th><th>Unit Price</th><th>Quantity</th><th>Total Price</th></tr></thead>";
    invoiceHTML += "<tbody>";

    if (tshirtCount > 0) {
        invoiceHTML += "<tr><td>T-Shirt</td><td>$" + tshirtPrice + "</td><td>" + tshirtCount + "</td><td>$" + (tshirtCount * tshirtPrice) + "</td></tr>";
    }

    if (jacketCount > 0) {
        invoiceHTML += "<tr><td>Jacket</td><td>$" + jacketPrice + "</td><td>" + jacketCount + "</td><td>$" + (jacketCount * jacketPrice) + "</td></tr>";
    }

    if (capCount > 0) {
        invoiceHTML += "<tr><td>Cap</td><td>$" + capPrice + "</td><td>" + capCount + "</td><td>$" + (capCount * capPrice) + "</td></tr>";
    }

    invoiceHTML += "<tr><td colspan='3'>Subtotal</td><td>$" + subtotal + "</td></tr>";
    invoiceHTML += "<tr><td colspan='3'>Tax</td><td>$" + tax + "</td></tr>";

    if (discount > 0) {
        invoiceHTML += "<tr><td colspan='3'>Discount (10%)</td><td>-$" + discount + "</td></tr>";
    }

    invoiceHTML += "<tr><td colspan='3'><strong>Total</strong></td><td><strong>$" + total + "</strong></td></tr>";
    invoiceHTML += "</tbody></table>";

    document.getElementById('invoice').innerHTML = invoiceHTML;


    return false;
}

function showMessage(buttonId) {
    switch (buttonId) {
        case 'b1':
            alert('This is a Tshirt. 100% Cotton. Available in all sizes.');
            break;
        case 'b2':
            alert('This is a Jacket. Perfect for winter. Waterproof.');
            break;
        case 'b3':
            alert('This is a Cap. Adjustable size. Protects from sun.');
            break;
        case 'b4':
            alert('This is a Bracelet. Elegant design. Fits all wrists.');
            break;
        case 'b5':
            alert('These are Sunglasses. Polarized. Stylish design.');
            break;
    }
}



