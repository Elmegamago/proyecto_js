function resumir() {

  let categoria = document.getElementById('tipodecategoria').value
  let estudiante = document.getElementById('estudiante').value
  let trainee = document.getElementById('trainee').value
  let junior = document.getElementById('junior').value

if (categoria == estudiante) {

  var precio = 200 * 0.2 * document.getElementById ('cantidadticket').value
  document.getElementById('totalpagar').value= 'Total a Pagar: $' + precio
  console.log(precio)

} else if (categoria == trainee) {

    var precio = 200 * 0.5 * document.getElementById ('cantidadticket').value
    document.getElementById('totalpagar').value= 'Total a Pagar: $ ' + precio
    console.log(precio)
    
  } else if (categoria == junior) {

    var precio = 200 * 0.85 * document.getElementById ('cantidadticket').value
    document.getElementById('totalpagar').value= 'Total a Pagar: $ ' + precio
    console.log(precio)

}
}
