function passaAnteriorIBB(objRebut){
    let idObjPregAct = objRebut.parentElement.parentElement.id; 
    let colArticles = document.getElementsByTagName("article");
    let idObjPregAnt;
      for (let i = 0; i < colArticles.length; i++) {
      if(colArticles[i].id == idObjPregAct){
        idObjPregAnt = colArticles[i-1].id;
        break;
      };
    }
    
    amagaElement(idObjPregAct);
    mostraElement(idObjPregAnt);
  }
  function mostraElement(idRebut){
    document.getElementById(idRebut).classList.add("elementVisibleIBB");
    document.getElementById(idRebut).classList.remove("elementOcultIBB");
  }
  
  function amagaElement(idRebut){
    document.getElementById(idRebut).classList.remove("elementVisibleIBB");
    document.getElementById(idRebut).classList.add("elementOcultIBB");
  }