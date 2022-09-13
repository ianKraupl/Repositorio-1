const kilometros = prompt("Ingrese la distancia a recorrer.");

if (kilometros >= 0 && kilometros < 1000) {
    alert("El medio apropiado para ir es caminando.");
}

else if (kilometros >= 1000 && kilometros < 10000){
    alert("El medio apropiado para ir es en bicicleta.");
}

else if (kilometros >= 10000 && kilometros < 30000) {
    alert("El medio apropiado para ir es en colectivo.");
}
else if (kilometros >= 30000 && kilometros < 100000) {
    alert("El medio apropiado para ir es en auto.");
}
else if (distancia >= 100000) {
    alert("El medio apropiado para ir es en avion.");
}

