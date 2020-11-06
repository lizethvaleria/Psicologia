const downloadPreguntasPDF = (titulo, preguntas, nombreArchivo) => {
  const pdf = new jsPDF("landscape");
  const columns = [titulo];

  const data = [];
  preguntas.forEach(pregunta => {
    data.push([pregunta.mensaje]);
    data.push([pregunta.respuesta]);
  });

  pdf.autoTable(columns, data, {
    margin: { top: 25 }
  });

  pdf.save(nombreArchivo);
};

export {
    downloadPreguntasPDF
}
