import $ from "jquery";
import './app1.css'
//刷新不改变数字
const n = localStorage.getItem('n')
$('#number').text(n || 100)

$('#add1').on('click', () => {
  let n = parseInt($('#number').text())
  n += 1
  localStorage.setItem('n', n)
  $('#number').text(n)
})
$("#sub1").on("click", () => {
  let n = parseInt($('#number').text());
  n -= 1;
  localStorage.setItem("n", n);
  $('#number').text(n);
});
$("#mul2").on("click", () => {
  let n = parseInt($('#number').text());
  n *= 2;
  localStorage.setItem("n", n);
  $('#number').text(n);
});
$('#divide2').on("click", () => {
  let n = parseInt($('#number').text());
  n /= 2;
  localStorage.setItem("n", n);
  $('#number').text(n);
});