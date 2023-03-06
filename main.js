function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet',modelLoaded);
}

//Carregue o modelo Mobilenet na função setup() e escreva o código para a função modelLoaded().
function modelLoaded(){
  console.log(' model loaded! ');
}


//Crie uma função draw(). Dentro dele, escreva um código para colocar a visualização ao vivo da webcam na tela.
function draw(){
  image(video,0,0,300,300,);
  classifier.classyify(video, gotResult);
}
var previsousResult-'';



//Execute a função ml5.js que receberá a entrada (visualização da webcam), e retornará o resultado após comparar com o modelo.

function gotResult (error,results){
  if (error){
    console.error(error);
  } else
    if((results[0].confidence >0.5)&&previousResult != results[0].label)(
      consol.log(results);
      previsousResult-results[0].label;
      var synth= windows.speechsynthesis;
      speakData-' oobjeto determinado é ' +results[0].label;
      var UttersThis- new speeachsyntessisUtterance(speakData);
      synth.speak(UttersThis);
        document.getElementById('resultObjectName').innerHTML-results[0],.label;
        document.getElementById( " resultobject.accuracy").innerHTML=results[0].confidence.toFixed(3);
    )
      
}



