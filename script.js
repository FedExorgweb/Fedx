document.getElementById('trackingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const trackingCode = document.getElementById('trackingCode').value;
    const validCode = '202409fedxh43gshsy344uiopp7lmbd';
    
    if (trackingCode === validCode) {
        window.location.href = 'order.html';
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
});
