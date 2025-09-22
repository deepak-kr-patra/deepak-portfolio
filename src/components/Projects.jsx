import ProjectCard from './projects/ProjectCard'
import ProjectInfo1 from './projects/ProjectInfo1'
import ProjectInfo3 from './projects/ProjectInfo3'
import ProjectInfo6 from './projects/ProjectInfo6'
import ProjectInfo7 from './projects/ProjectInfo7'
import ProjectInfo8 from './projects/ProjectInfo8'
import ProjectInfo9 from './projects/ProjectInfo9'
import useScreenWidth from '../zustand/useScreenWidth'


const Projects = () => {

    const toggleInfoView = (tag) => {
        let projectInfoCurrent = document.getElementById(`projectInfo${tag}`);

        if (projectInfoCurrent) {
            projectInfoCurrent.classList.toggle('show');
        } else {
            console.log("not loaded");
        }
    };

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
        description: "A full stack web application for chatting.",
        siteURL: "https://mern-chat-web-app-iwwq.onrender.com/",
        githubURL: "https://github.com/deepak-kr-patra/mern-chat-web-app"
    }
    const project3Values = {
        imageURL: "/screenshot.png",
        header: "TextUtils app",
        description: "A React.js text utility app.",
        siteURL: "https://deepak-kr-patra.github.io/TextUtils/",
        githubURL: "https://github.com/deepak-kr-patra/TextUtils"
    }
    const project6Values = {
        imageURL: "/galaxy.jpg",
        header: "Cosmos Gallery",
        description: "A web app for pictures of the cosmos.",
        siteURL: "https://cosmos-gallery.onrender.com/",
        githubURL: "https://github.com/deepak-kr-patra/cosmos-gallery"
    }
    const project7Values = {
        imageURL: "/to-do-list.jpeg",
        header: "To-Do List",
        description: "A To-Do List web app based on MERN stack.",
        siteURL: "https://to-do-list-73fz.onrender.com/",
        githubURL: "https://github.com/deepak-kr-patra/To-Do-List"
    }
    const project8Values = {
        imageURL: "/expense.webp",
        header: "Expense Manager",
        description: "A MERN app to manage your expenses.",
        siteURL: "https://expense-manager-byke.onrender.com/",
        githubURL: "https://github.com/deepak-kr-patra/expense-manager"
    }
    const project9Values = {
        imageURL: "/fruitsbg.jpg",
        header: "Fruity Arrays",
        description: "An educational game to learn about JavaScript array methods.",
        siteURL: "https://fruityarrays.netlify.app/",
        githubURL: "https://github.com/deepak-kr-patra/fruityArrays"
    }

    return (
        <div className='tw-flex tw-flex-col tw-w-full tw-items-center tw-justify-center tw-bg-gray-100 tw-py-8 projects-box' id='projects'>
            <div className='tw-flex tw-items-start tw-mb-8'>
                <p className='tw-text-2xl tw-text-gray-950 tw-font-bold'>PROJECTS</p>
            </div>
            <div className={`tw-grid ${gridCols} tw-gap-6`}>
                <ProjectCard toggleInfoView={toggleInfoView} tag={"Nine"} projectValues={project9Values} />
                <ProjectCard toggleInfoView={toggleInfoView} tag={"Six"} projectValues={project6Values} />

                <ProjectCard toggleInfoView={toggleInfoView} tag={"One"} projectValues={project1Values} />
                <ProjectCard toggleInfoView={toggleInfoView} tag={"Eight"} projectValues={project8Values} />
                <ProjectCard toggleInfoView={toggleInfoView} tag={"Seven"} projectValues={project7Values} />

                {/* <ProjectCard toggleInfoView={toggleInfoView} tag={"Two"} projectValues={project2Values} /> */}
                <ProjectCard toggleInfoView={toggleInfoView} tag={"Three"} projectValues={project3Values} />
                {/* <ProjectCard toggleInfoView={toggleInfoView} tag={"Four"} projectValues={project4Values} />
                <ProjectCard toggleInfoView={toggleInfoView} tag={"Five"} projectValues={project5Values} /> */}
            </div>

            {/* initially hidden components */}
            <ProjectInfo1 toggleInfoView={toggleInfoView} />
            {/* <ProjectInfo2 toggleInfoView={toggleInfoView} /> */}
            <ProjectInfo3 toggleInfoView={toggleInfoView} />
            {/* <ProjectInfo4 toggleInfoView={toggleInfoView} />
            <ProjectInfo5 toggleInfoView={toggleInfoView} /> */}
            <ProjectInfo6 toggleInfoView={toggleInfoView} />
            <ProjectInfo7 toggleInfoView={toggleInfoView} />
            <ProjectInfo8 toggleInfoView={toggleInfoView} />
            <ProjectInfo9 toggleInfoView={toggleInfoView} />
        </div>
    )
}

export default Projects