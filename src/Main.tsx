import * as React from "react";
import { App } from "./App";
import { Hello } from "./components/Hello";

export interface IMainProps
{
    app: App;
}

export class Main extends React.Component<IMainProps, {}>
{
    constructor(props: IMainProps)
    {
        super(props);
    }

    public greet(person:String, date:Date) {
        return (`Hello ${person}, today is ${date}!`);
    }
       
    public render(): JSX.Element
    {
        return (
            <>
                <Hello name={this.props.app.appName} />
                <p>{this.greet("Luiz","monday")}</p>
            </>
        );
    }
}