# Ejercicio 1

Problema: Tenemos un loro hablador.El parametro hora es la hora actual en un rango de 0 a 23.Estamos en problemas si el loro esta hablando y la hora es antes de las 7 o despues de 20.Retorna 1 si estamos en problemas,caso contrario retornar 0.El parametro talking es true si el loro esta hablando de lo contrario es false.

### Inicio: Calcular si estamos en problemas.

#### Ingreso de Datos
- hora
- talking
- salida

#### Proceso

- Preguntar que hora es.
-Preguntar si el loro esta hablando.
- SI :
	 -hora < 7 and talking=True,estamos en problemas,mostrar 1.
-DE LO CONTRARIO,SI :
 	-hora>20 and talking=True, estamos en problemas-mostrar 1
-SI NO: 
	-Si ninguna de las condiciones anteriores no se cumplen, no estamos en problemas-mostrar 0

*Fin*
