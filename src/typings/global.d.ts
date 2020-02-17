export = Website;
export as namespace Website;

declare namespace Website {
    interface ITag {
        label: string;
        url?: string;
    }

    interface ILink {
        label: string;
        url: string;
    }

    interface IP5Frame {
        frameURL: string;
        links?: ILink[];
    }

    interface IProject {
        id: string;
        label: string;
        tags?: ITag[];
        description?: string;
        image?: string;
        images?: string[];
        links?: ILink[];
        p5?: IP5Frame;
        date?: string;
    }
}
