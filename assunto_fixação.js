function Calcular_Idade() {

    if (document.getElementById("pe_data_nascimento").value == "") {
      alert('Por favor, informe a data de nascimento');
      document.getElementById("pe_data_nascimento").focus();
      return false
    }

    let inicio = moment(document.getElementById('pe_data_nascimento').value);
    let hoje = moment();
    let dia_hoje = hoje.date();


    let dia_aniversario = inicio.date();
    let mes_aniversario = inicio.month();
    let aniversario_este_ano = moment();
    aniversario_este_ano.date(dia_aniversario);
    aniversario_este_ano.month(mes_aniversario);
    let aniversario_este_mes = moment();
    aniversario_este_mes.date(dia_aniversario);
    aniversario_este_mes.month();


    let meses_corridos = hoje.diff(aniversario_este_ano, 'month');

    let dias_corridos;


    if (dia_aniversario > dia_hoje) {
      let xx = moment();
      xx.subtract(1, "month");
      dias_corridos = hoje.diff(xx, 'day');
    } else {
      dias_corridos = hoje.diff(aniversario_este_mes, 'day');
    };

    let horas = hoje.diff(inicio, 'hour').toLocaleString('pt-BR');
    let dias = hoje.diff(inicio, 'day').toLocaleString('pt-BR');
    let mes = hoje.diff(inicio, 'month').toLocaleString('pt-BR');
    let ano = hoje.diff(inicio, 'year');
    let minutos = hoje.diff(inicio, 'minutes').toLocaleString('pt-BR');


    let text_ano;
    let text_mes;
    let text_dia;

    if (ano > 1) {
      text_ano = ' anos ';
    } else {
      text_ano = ' ano ';
    };


    if (meses_corridos > 2) {
      text_mes = ' meses e ';
    } else {
      text_mes = ' mês e ';
    };


    if (dias_corridos > 1) {
      text_dia = ' dias ';
    } else {
      text_dia = ' dia ';
    };

    document.getElementById("dias").setAttribute('value', dias);
    document.getElementById("meses").setAttribute('value', mes);
    document.getElementById("horas").setAttribute('value', horas);
    document.getElementById("minutos").setAttribute('value', minutos);
    document.getElementById("resultado").setAttribute('value', ano + text_ano);
  }

  function eraseText() {
    document.getElementById("pe_data_nascimento").focus();
    document.getElementById("pe_data_nascimento").setAttribute('value', "");
    document.getElementById("resultado").setAttribute('value', "");
    document.getElementById("dias").setAttribute('value', "");
    document.getElementById("meses").setAttribute('value', "");
    document.getElementById("horas").setAttribute('value', "");
    document.getElementById("minutos").setAttribute('value', "");
  }