function obtenerVariableDeURL(nombreVariable) {
    // Obtener la cadena de consulta de la URL actual
    const queryString = window.location.search;
    // Crear un objeto URLSearchParams para analizar la cadena de consulta
    const urlParams = new URLSearchParams(queryString);
    // Obtener el valor de la variable solicitada
    const valorVariable = urlParams.get(nombreVariable);
    // Devolver el valor de la variable (puede ser null si no se encuentra)
    return valorVariable;
}

//alert("Hola mundo")

// Para obtener el valor de la variable 'id':
const id = obtenerVariableDeURL('noticia');
console.log('Valor de la variable "id":', id); // Salida: Valor de la variable "id": 123

const nombre = obtenerVariableDeURL('nombre');
console.log('Valor de la variable "nombre":', nombre); // Salida: Valor de la variable "nombre": Juan

// Para obtener una variable que no existe:
const otraVariable = obtenerVariableDeURL('apellido');
console.log('Valor de la variable "apellido":', otraVariable);

const idnoticia = obtenerVariableDeURL('idnoticia');
console.log('Valor de la variable "idnoticia":', idnoticia);

// funcion Calcula el tiempo
function tiempoHace(fechaInput) {
    // 1. ValidaciÃ³n y conversiÃ³n de la entrada
    if (!fechaInput) {
      return "Fecha invÃ¡lida";
    }
  
    const fechaPost = new Date(fechaInput);
  
    // Verificar si la fecha es vÃ¡lida despuÃ©s de intentar parsearla
    if (isNaN(fechaPost.getTime())) {
      // Intenta parsear formatos comunes si falla el constructor estÃ¡ndar
      // (Esto es opcional y puede necesitar ajustes segÃºn tus formatos)
      // Ejemplo simple: intentar parsear "DD/MM/YYYY HH:mm:ss"
      if (typeof fechaInput === 'string') {
          const parts = fechaInput.match(/(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})(?:[ T](\d{1,2}):(\d{1,2}):?(\d{1,2})?)?/);
          if (parts) {
              // Formato DD/MM/YYYY o MM/DD/YYYY - Â¡Cuidado con la ambigÃ¼edad!
              // Asumamos DD/MM/YYYY para el ejemplo
              const day = parseInt(parts[1], 10);
              const month = parseInt(parts[2], 10) - 1; // Meses en JS son 0-indexados
              const year = parseInt(parts[3], 10);
              const hour = parseInt(parts[4] || "0", 10);
              const minute = parseInt(parts[5] || "0", 10);
              const second = parseInt(parts[6] || "0", 10);
              fechaPost.setTime(new Date(year, month, day, hour, minute, second).getTime());
          }
      }
       // Re-verificar despuÃ©s del intento de parseo manual
       if (isNaN(fechaPost.getTime())) {
         return "Fecha invÃ¡lida";
       }
    }
  
  
    // 2. Calcular diferencia con la fecha/hora actual
    const ahora = new Date();
    const diffEnMs = ahora.getTime() - fechaPost.getTime();
  
    // 3. Manejar fechas futuras o diferencias muy pequeÃ±as
    // Si la fecha es futura (diff < 0) o la diferencia es mÃ­nima (menos de 1 segundo),
    // podemos devolver "reciÃ©n" o similar.
    if (diffEnMs < 1000) {
        return "reciÃ©n publicado"; // O "justo ahora"
    }
  
    // 4. Definir constantes de tiempo en milisegundos
    const MS_POR_SEGUNDO = 1000;
    const MS_POR_MINUTO = 60 * MS_POR_SEGUNDO;
    const MS_POR_HORA = 60 * MS_POR_MINUTO;
    const MS_POR_DIA = 24 * MS_POR_HORA;
    // Usar aproximaciones para meses y aÃ±os para simplificar
    const MS_POR_MES = 30 * MS_POR_DIA;   // AproximaciÃ³n (30 dÃ­as)
    const MS_POR_ANIO = 365 * MS_POR_DIA; // AproximaciÃ³n (365 dÃ­as)
  
    // 5. Calcular la diferencia en diferentes unidades (usando Math.floor para redondear hacia abajo)
    const segundos = Math.floor(diffEnMs / MS_POR_SEGUNDO);
    const minutos = Math.floor(diffEnMs / MS_POR_MINUTO);
    const horas = Math.floor(diffEnMs / MS_POR_HORA);
    const dias = Math.floor(diffEnMs / MS_POR_DIA);
    const meses = Math.floor(diffEnMs / MS_POR_MES);
    const anios = Math.floor(diffEnMs / MS_POR_ANIO);
  
    // 6. Devolver el formato adecuado segÃºn la unidad mayor
    if (anios > 0) {
      return `hace ${anios} ${anios === 1 ? 'año' : 'años'}`;
    } else if (meses > 0) {
      return `hace ${meses} ${meses === 1 ? 'mes' : 'meses'}`;
    } else if (dias > 0) {
      // Opcional: PodrÃ­as mostrar semanas aquÃ­ si prefieres (ej. si dias > 6)
      // const semanas = Math.floor(dias / 7);
      // if (semanas > 0) return `hace ${semanas} ${semanas === 1 ? 'semana' : 'semanas'}`;
      return `hace ${dias} ${dias === 1 ? 'día' : 'días'}`;
    } else if (horas > 0) {
      return `hace ${horas} ${horas === 1 ? 'hora' : 'horas'}`;
    } else if (minutos > 0) {
      return `hace ${minutos} ${minutos === 1 ? 'minuto' : 'minutos'}`;
    } else {
      // Si es menos de un minuto, pero mÃ¡s de unos segundos
      return `hace ${segundos} ${segundos === 1 ? 'segundo' : 'segundos'}`;
      // Alternativa mÃ¡s amigable para pocos segundos:
      // return "hace unos segundos";
    }
  }

//iteracion para obtener el objeto
function obtenerNoticia(id) {
    for (let i = 0; i < noticias.length; i++) {
        if (id == noticias[i].id) {
            return noticias[i]
        }
    }
}


// titulo = noticias[id].titulo;
noticia = obtenerNoticia(id)
// const noticiaSeleccionada = obtenerNoticia(id);

//mostrar en el html
document.getElementById("titulo").innerHTML = noticia.titulo;
document.getElementById("image").src = noticia.imagen;
console.log(noticia.desc_noticia)
document.getElementById("descripcion").innerHTML = noticia.desc_noticia;
console.log(noticia.fecha);

document.getElementById("fecha").innerHTML = tiempoHace(noticia.fecha);
document.getElementById("top").innerHTML = "LO MEJOR DE " + noticia.categoria;