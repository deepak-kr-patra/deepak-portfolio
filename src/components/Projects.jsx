import ProjectItem from './projects/ProjectItem'
import ProjectInfo1 from './projects/ProjectInfo1'
import ProjectInfo2 from './projects/ProjectInfo2'
import ProjectInfo3 from './projects/ProjectInfo3'
import ProjectInfo4 from './projects/ProjectInfo4'
import ProjectInfo5 from './projects/ProjectInfo5'
import ProjectInfo6 from './projects/ProjectInfo6'
import ProjectInfo7 from './projects/ProjectInfo7'
import ProjectInfo8 from './projects/ProjectInfo8'
import ProjectInfo9 from './projects/ProjectInfo9'
import useScreenWidth from '../zustand/useScreenWidth'


const Projects = () => {

    window.onload = () => {
        let projectInfoOne = document.getElementById('projectInfoOne');
        projectInfoOne.classList.remove('show');

        let projectInfoTwo = document.getElementById('projectInfoTwo');
        projectInfoTwo.classList.remove('show');

        let projectInfoThree = document.getElementById('projectInfoThree');
        projectInfoThree.classList.remove('show');

        let projectInfoFour = document.getElementById('projectInfoFour');
        projectInfoFour.classList.remove('show');

        let projectInfoFive = document.getElementById('projectInfoFive');
        projectInfoFive.classList.remove('show');

        let projectInfoSix = document.getElementById('projectInfoSix');
        projectInfoSix.classList.remove('show');

        let projectInfoSeven = document.getElementById('projectInfoSeven');
        projectInfoSeven.classList.remove('show');

        let projectInfoEight = document.getElementById('projectInfoEight');
        projectInfoEight.classList.remove('show');

        let projectInfoNine = document.getElementById('projectInfoNine');
        projectInfoNine.classList.remove('show');
    }

    const toggleInfoView = (tag) => {
        let projectInfoCurrent;
        if (tag === 1) {
            projectInfoCurrent = projectInfoOne;
        } else if (tag === 2) {
            projectInfoCurrent = projectInfoTwo;
        } else if (tag === 3) {
            projectInfoCurrent = projectInfoThree;
        } else if (tag === 4) {
            projectInfoCurrent = projectInfoFour;
        } else if (tag === 5) {
            projectInfoCurrent = projectInfoFive;
        } else if (tag === 6) {
            projectInfoCurrent = projectInfoSix;
        } else if (tag === 7) {
            projectInfoCurrent = projectInfoSeven;
        } else if (tag === 8) {
            projectInfoCurrent = projectInfoEight;
        } else if (tag === 9) {
            projectInfoCurrent = projectInfoNine;
        }

        if (projectInfoCurrent) {
            projectInfoCurrent.classList.toggle('show');
        } else {
            console.log("not loaded");
        }
    }

    const { screenWidth } = useScreenWidth();

    let gridCols = "";
    if (screenWidth > 1200) {
        gridCols = "tw-grid-cols-3";
    } else if (screenWidth <= 1200 && screenWidth > 750) {
        gridCols = "tw-grid-cols-2";
    } else if (screenWidth <= 750) {
        gridCols = "tw-grid-cols-1";
    }

    const project1Values = {
        imageURL: "/chat.jpg",
        header: "Chat web app",
        description: "A full stack web application for chatting."
    }
    const project2Values = {
        imageURL: "/notebook.png",
        header: "Notebook MERN app",
        description: "A full stack web application for saving notes."
    }
    const project3Values = {
        imageURL: "/screenshot.png",
        header: "TextUtils app",
        description: "A React.js text utility app."
    }
    const project4Values = {
        imageURL: "/news.jpg",
        header: "NewsCart app",
        description: "A React.js app to read latest news."
    }
    const project5Values = {
        imageURL: "/tictactoe.png",
        header: "TicTacToe game",
        description: "An android tic tac toe app."
    }
    const project6Values = {
        imageURL: "/galaxy.jpg",
        header: "Cosmos Gallery",
        description: "A web app for pictures of the cosmos."
    }
    const project7Values = {
        imageURL: "/to-do-list.jpeg",
        header: "To-Do List",
        description: "A To-Do List web app based on MERN stack."
    }
    const project8Values = {
        imageURL: "/expense.webp",
        header: "Expense Manager",
        description: "A MERN app to manage your expenses."
    }
    const project9Values = {
        imageURL: "/fruits.png",
        header: "Fruity Arrays",
        description: "An educational game to learn about JavaScript array methods."
    }

    return (
        <div className='tw-flex tw-flex-col tw-w-full tw-items-center tw-justify-center tw-bg-gray-100 tw-py-8 projects-box' id='projects'>
            <div className='tw-flex tw-items-start tw-mb-8'>
                <p className='tw-text-2xl tw-text-gray-950 tw-font-bold'>PROJECTS</p>
            </div>
            <div className={`tw-grid ${gridCols} tw-gap-6`}>
                <ProjectItem toggleInfoView={toggleInfoView} tag={9} projectValues={project9Values} />
                <ProjectItem toggleInfoView={toggleInfoView} tag={6} projectValues={project6Values} />

                <ProjectItem toggleInfoView={toggleInfoView} tag={1} projectValues={project1Values} />
                <ProjectItem toggleInfoView={toggleInfoView} tag={8} projectValues={project8Values} />
                <ProjectItem toggleInfoView={toggleInfoView} tag={7} projectValues={project7Values} />

                <ProjectItem toggleInfoView={toggleInfoView} tag={2} projectValues={project2Values} />
                <ProjectItem toggleInfoView={toggleInfoView} tag={3} projectValues={project3Values} />
                <ProjectItem toggleInfoView={toggleInfoView} tag={4} projectValues={project4Values} />
                <ProjectItem toggleInfoView={toggleInfoView} tag={5} projectValues={project5Values} />
            </div>

            {/* initially hidden components */}
            <ProjectInfo1 toggleInfoView={toggleInfoView} />
            <ProjectInfo2 toggleInfoView={toggleInfoView} />
            <ProjectInfo3 toggleInfoView={toggleInfoView} />
            <ProjectInfo4 toggleInfoView={toggleInfoView} />
            <ProjectInfo5 toggleInfoView={toggleInfoView} />
            <ProjectInfo6 toggleInfoView={toggleInfoView} />
            <ProjectInfo7 toggleInfoView={toggleInfoView} />
            <ProjectInfo8 toggleInfoView={toggleInfoView} />
            <ProjectInfo9 toggleInfoView={toggleInfoView} />
        </div>
    )
}

export default Projects