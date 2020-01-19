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

    interface IProject {
        label: string;
        tags?: ITag[];
        description?: string;
        image?: string;
        images?: string[];
        url: string;
        links?: ILink[];
        p5?: string;
    }
}
