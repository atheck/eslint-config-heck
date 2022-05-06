import React, { Fragment, useCallback, useState } from "react";

type Props = {
    actionName: string,
}

const Component = function (props: Props): React.ReactElement {
    return <div>
        <button >{props.actionName}</button>
    </div>;
};

class ClassComponent extends React.Component<{}, { actionName: string }> {
    private renderBefore (): null {
        return null;
    }

    public render (): React.ReactElement {
        this.setState({ actionName: this.state.actionName });

        return < div aria-checked={true}  color="black"

            className = "foo"/>;
    }

    private renderPart (): JSX.Element {
        return <div />;
    }

    private uselessFragment(): JSX.Element {
        return (
            <Fragment>
                {"single"}
            </Fragment>
        );
    }

    private uselessFragment(): JSX.Element {
        return (
            <Fragment>
                <div />
            </Fragment>
        );
    }
}

function FunctionComponent (): React.ReactElement {
    const hook = useState(true);

    return (
        <iframe>
            <div />
        </iframe>
    );
}

// Hooks
function Hooks (): JSX.Element {
    if (true) {
        const [state, setState] = useState(true);
    }

    const [someVar, setSomeVar] = useState(true);

    useCallback(() => {
        if (someVar) {
            setSomeVar(false);
        }
    }, []);
}

export { Component };