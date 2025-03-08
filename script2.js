<script>
	        function commaSeparateNumber(val) {
        while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
        }
        return val;
        }

        function countup() {
        $('.stat_holder').each(function() {
        var $this = $(this),
        countTo = $this.attr('data-count');

        $({
        countNum: $this.text()
        }).animate({
        countNum: countTo
        },

        {
        duration: 3000,
        easing: 'linear',
        step: function() {
        $this.text(commaSeparateNumber(Math.floor(this.countNum)));
        },
        complete: function() {
        $this.text(commaSeparateNumber(this.countNum));
        //alert('finished');
        }
        }
        );
        });
        }

        $().ready(function(){
            countup();
        });

</script>
