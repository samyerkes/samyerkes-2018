document.addEventListener("DOMContentLoaded", function(){
  getSystemStatus();
});
function getSystemStatus() {
    let request = new XMLHttpRequest(),
        url = "https://status.samyerkes.com/api/v1/status";
    request.open('GET', url, true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            let systemStatus = JSON.parse(request.responseText).data;
            printSystemStatusButton(systemStatus);
        } else {
            console.log('The resource returned an error');
        }
    };
    request.onerror = function() {
      console.log('Could not connect to the resource')
    };
    request.send();
}
function printSystemStatusButton(text) {
    let myelement = document.getElementById("system_status");
    myelement.innerHTML = text;
    text !== "All systems are operational" && myelement.classList.add('is-danger');
}