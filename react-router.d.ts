declare module "react-router" {
    import * as React from 'react'

    //#region BrowserRouter

    namespace BrowserRouterModule {
        interface BrowserRouterProps extends React.Props<BrowserRouter> {
            basename?: string,
            forceRefresh?: boolean,
            getUserConfirmation?: any,
            keyLength?: number,
            children?: any
        }
        export interface BrowserRouter extends React.ComponentClass<BrowserRouterProps> { }
    }

    export const BrowserRouter: BrowserRouterModule.BrowserRouter;

    //#endregion

    //#region createServerRenderContext

    export interface createServerRenderContext {

    }

    //#endregion

    //#region HashRouterModule

    namespace HashRouterModule {
        interface HashRouterProps extends React.Props<HashRouter> {
            basename?: string,
            getUserConfirmation?: any,
            hashType?: string,
            children?: any
        }
        interface HashRouter extends React.ComponentClass<HashRouterProps> { }
    }

    export const HashRouter: HashRouterModule.HashRouter

    //#endregion

    //#region Link

    namespace LinkModule {

        interface LinkProps extends React.HTMLAttributes<Link>, React.Props<Link> {
            to: string | any,
            replace?: boolean,
            activeStyle?: any,
            activeClassName?: string,
            location?: any,
            activeOnlyWhenExact?: boolean,
            isActive?: any,
            children?: any,
            style?: any,
            className?: string,
            target?: string,
            onClick?: any
        }

        export interface Link extends React.ComponentClass<LinkProps> { }
    }

    export const Link: LinkModule.Link;

    //#endregion

    //#region Match

    namespace MatchModule {
        interface MatchProps extends React.Props<Match> {
            pattern: string,
            exactly?: boolean,
            location?: any,
            children?: any,
            render?: (props: MatchParams) => any,
            component?: any
        }

        interface Match extends React.ComponentClass<MatchProps> { }
    }

    export const Match: MatchModule.Match;

    //#endregion

    //#region matchPattern

    interface matchPattern {
        pattern: string,
        location: any,
        matchExactly: boolean,
        parent: any
    }

    export const matchPattern;

    //#endregion 

    //#region matchParams

    export interface MatchParams {
        pattern: string;
        pathname: string;
        isExact: boolean;
        location: any;
        params: any;
    }

    //#endregion

    //#region MemoryRouter

    namespace MemoryRouterModule {
        interface MemoryRouterProps extends React.Props<MemoryRouter> {
            getUserConfirmation?: any,
            initialEntries?: any,
            initialIndex?: number,
            keyLength?: number,
            children?: any
        }
        interface MemoryRouter extends React.ComponentClass<MemoryRouterProps> { }
    }

    export const MemoryRouter: MemoryRouterModule.MemoryRouter;

    //#endregion

    //#region Miss

    namespace MissModule {
        interface MissProps extends React.Props<Miss> {
            children?: any,
            location?: any,
            render?: (props: {location: PropTypes.location}) => any,
            component?: any
        }
        export interface Miss extends React.ComponentClass<MissProps> { }
    }

    export const Miss: MissModule.Miss;

    //#endregion

    //#region PropTypes

    namespace PropTypes {
        export type action = "PUSH" | "REPLACE" | "POP";

        export interface matchContext {
            addMatch: Function,
            removeMatch: Function,
        }

        export interface history {
            listen: Function,
            listenBefore: Function,
            push: Function,
            replace: Function,
            go: Function,
        }

        export interface location {
            pathname: string,
            search: string,
            hash: string,
            state?: any,
            key?: string
        }

    }

    //#endregion

    //#region Router

    export interface Router {
        transitionTo: (location: string | PropTypes.location) => void;
        replaceWith: Function;
        blockTransitions: Function;
        createHref: Function;
    }

    //#endregion

    //#region Redirect

    namespace RedirectModule {

        interface RedirectProps extends React.Props<Redirect> {
            to: string | any,
            push?: boolean
        }

        export interface Redirect extends React.ComponentClass<RedirectProps> { }
    }

    export const Redirect: RedirectModule.Redirect;

    export type redirectFunction = (path: string) => void;

    //#endregion

    //#region ServerRouter 

    namespace ServerRouterModule {
        interface ServerRouterProps extends React.Props<ServerRouter> {
            context: any,
            location: string,
            children?: any
        }
        export interface ServerRouter extends React.ComponentClass<ServerRouterProps> { }
    }

    export const ServerRouter: ServerRouterModule.ServerRouter;

    //#endregion
}