import React from 'react';
import Projects from 'src/pages/Home/components/Projects/Projects';
import { ProjectsData } from '../../../ProjectsData';

interface IHomeContextState {
    tag: Website.ITag;
    tags: Website.ITag[];
    project: Website.IProject;
    projects: Website.IProject[];
    chunckedProjects: Website.IProject[][];
    randomProjects: Website.IProject[];
    onSetTag: (tag: Website.ITag) => void;
    onSetProject: (project: Website.IProject) => void;
    projectModalOpen: boolean;
    onCloseProjectModal: () => void;
    onProjectModalOnSetTag: (nextTag: Website.ITag) => void;
}

const MAX_PROJECTS = 6;

function getTags(): Website.ITag[] {
    let set = {};
    ProjectsData.forEach(project =>
        project.tags.forEach(tag => (set[tag.label] = tag))
    );
    return Object.values(set);
}

function chunkProjects(currentTag, projects) {
    let chunkedProjects = [];
    let totalProjects = 0;
    let projectsCopy = [...projects];

    /** Was working on randomiing the projects and selecting a random set for modal */

    const addProject = project => {
        const index = Math.floor(totalProjects / MAX_PROJECTS);
        chunkedProjects[index] = chunkedProjects[index] || [];
        chunkedProjects[index].push(project);
        totalProjects += 1;
    };

    while (projectsCopy && projectsCopy.length) {
        const [project, nextProjectsCopy] = randomPop(projectsCopy);
        projectsCopy = nextProjectsCopy;
        if (!currentTag) {
            addProject(project);
        } else if (project.tags.find(tag => tag.label === currentTag.label)) {
            addProject(project);
        }
    }
    return chunkedProjects;
}

function randomPop(array) {
    const values = array.splice(Math.floor(Math.random() * array.length), 1);
    return [values[0], [...array]];
}

function randomProjects(projects) {
    let projectsCopy = [...projects];
    return new Array(MAX_PROJECTS).fill(undefined).map(u => {
        const [project, nextProjectsCopy] = randomPop(projectsCopy);
        projectsCopy = nextProjectsCopy;
        return project;
    });
}

const INITIAL_STATE: IHomeContextState = {
    projectModalOpen: false,
    tag: undefined,
    tags: getTags(),
    project: undefined,
    projects: ProjectsData,
    randomProjects: undefined,
    chunckedProjects: undefined,
    onSetTag: (tag: Website.ITag) => {},
    onSetProject: (project: Website.IProject) => {},
    onCloseProjectModal: () => {},
    onProjectModalOnSetTag: (tag: Website.ITag) => {},
};

export const HomeContext = React.createContext(INITIAL_STATE);

export class HomeContextProvider extends React.Component<
    {},
    IHomeContextState
> {
    state = { ...INITIAL_STATE };

    onSetTag = nextTag => {
        const { tag } = this.state;
        if (tag && nextTag.label === tag.label) {
            this.setState({
                tag: undefined,
            });
        } else {
            this.setState({
                tag: nextTag,
            });
        }
    };

    onSetProject = nextProject => {
        this.setState({
            project: nextProject,
            randomProjects: nextProject
                ? randomProjects(ProjectsData)
                : undefined,
        });
    };

    onCloseProjectModal = () => {
        this.setState({
            project: undefined,
            randomProjects: undefined,
        });
    };

    onProjectModalOnSetTag = nextTag => {
        this.setState({
            project: undefined,
            randomProjects: undefined,
            tag: nextTag,
        });
    };

    render() {
        return (
            <HomeContext.Provider
                value={{
                    ...this.state,
                    onSetTag: this.onSetTag,
                    onSetProject: this.onSetProject,
                    onCloseProjectModal: this.onCloseProjectModal,
                    onProjectModalOnSetTag: this.onProjectModalOnSetTag,
                    chunckedProjects: chunkProjects(
                        this.state.tag,
                        ProjectsData
                    ),
                    projectModalOpen: Boolean(this.state.project),
                }}
            >
                {this.props.children}
            </HomeContext.Provider>
        );
    }
}
