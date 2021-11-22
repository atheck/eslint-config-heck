import React from "react";

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
}

export { Component };