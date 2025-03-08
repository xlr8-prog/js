<script>

function pad(number) {
    return number < 10 ? '0' + number : number;
}

function updateCountdown() {
    var now = new Date();
    var utcNow = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 
                          now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());

    var nextMidnightUtc = new Date(utcNow);
    nextMidnightUtc.setUTCDate(utcNow.getUTCDate() + 1);
    nextMidnightUtc.setUTCHours(0, 0, 0, 0);

    var diff = nextMidnightUtc - utcNow;
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    var countdownText = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    $("#time").text(countdownText);
}

setInterval(updateCountdown, 1000);

</script>





