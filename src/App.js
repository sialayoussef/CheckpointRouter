import { useState } from 'react';
import './App.css';
import NavMovie from './Components/NavMovie';
import ListMovies from './Components/ListMovies';
import AddMovie from './Components/AddMovie';
import FilterMovie from './Components/FilterMovie';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import MovieDetails from './Components/MovieDetails';

function App() {
  const [movies,setMovies] = useState([
    {title : 'Dachra', description :'Yasmine, étudiante en journalisme, et ses deux amis Walid et Bilel qui cherchent à élucider le mystère d’un vieux crime, commis il y a plus de 25 ans. Au milieu de nulle part, une femme avait été trouvée mutilée et presque morte. Une fois leur investigation terminée, ils vont se trouver dans une forêt où ils allaient découvrir un petit village isolé appelé “Dachra”. Coincé dans ce territoire inconnu, le trio va essayer de fuir l’horreur. Auront-ils réussi à s’échapper ?',posterURL:'https://pictures.artify.tn/media/r9p6ux7liv6q4pxabgwi.jpg?width=200',rating : 5, id : Math.random(),trailer : "https://www.youtube.com/embed/a5_WTF7KtYQ?si=-r9rf1jw8n3z1XRE"},
    {title : 'Rebelote', description :'C’est l’histoire de trois tunisiens que rien ne les relie dans la vie quotidienne à part le fait qu’ils sont accros à la drague via Facebook. Un jour ils tombent dans le piège d’une femme qui leur donne rendez-vous dans un endroit retiré et les braque avec l’aide d’un gang. Et c’est là qu’un phénomène surnaturel se produit et nos trois personnages se retrouvent sans le savoir projetés dans le passé…',posterURL:'https://pictures.artify.tn/media/ezxhsrwyexyglmoitxlh.jpg?width=200',rating : 3, id : Math.random(), trailer : "https://www.youtube.com/embed/v_C18B8wJyE?si=-rTrUKbMRpNMbshr" },
    {title : 'Noce d’été', description :'Hamid est journaliste, la trentaine passée et il vit son célibat avec sa famille petite bourgeoise comme un échappatoire pour ne pas ressembler aux siens. Sa famille veut le marier à tout prix avec sa voisine Rym (30 ans) pour mettre fin à ses hésitations, et aux mauvaises langues qui n’épargnent pas les célibataires endurcis. N’osant s’opposer à la décision de mariage de sa famille, Hamid préfère fuir l’atmosphère des préparatifs…',posterURL:'https://pictures.artify.tn/media/zhkfzolegpiij9rzf3ui.jpg?width=200',rating : 5, id : Math.random(), trailer : "https://www.youtube.com/embed/UPSX38CEgt8?si=P4Z8-SKkTSFoBGiY" },
    {title : 'A Peine J’ouvre Les Yeux', description :'Tunis, été 2010, quelques mois avant la Révolution, Farah 18 ans passe son bac et sa famille l’imagine déjà médecin… mais elle ne voit pas les choses de la même manière. Elle chante au sein d¹un groupe de rock engagé. Elle vibre, s’enivre, découvre l’amour et sa ville de nuit contre la volonté d’Hayet, sa mère, qui connaît la Tunisie et ses interdits.',posterURL:'https://pictures.artify.tn/media/r07wsehw43shedjuick2.jpg?width=200',rating : 2, id : Math.random(),trailer : "https://www.youtube.com/embed/oWX2o9-MZbc?si=EhQFSRHNYXu7Qd6q" },

  ])
  const [textLive,setTextLive] = useState('')
  const [rate,setRate] = useState(0)
  return (
    <div>
      <NavMovie/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Movies' element={<ListMovies movies={movies} textLive={textLive} rate={rate} setMovies={setMovies} setRate={setRate} setTextLive={setTextLive}/>}/>
        <Route path='/MovieDetails/:id' element={<MovieDetails movies={movies} />}/>
      </Routes>
   
      
      
    </div>
  );
}

export default App;
