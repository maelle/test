// https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
<script>
var paras = document.getElementsByClassName('caption');

while(paras[0]) {
    paras[0].parentNode.removeChild(paras[0]);
}
</script>