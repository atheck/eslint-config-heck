// ESLint React Rules Test File
// Each section contains code that triggers the corresponding rule

import React, { createContext, forwardRef, useCallback, useState } from "react";

// react/checked-requires-onchange-or-readonly
function CheckedInput(): React.ReactElement {
	return <input type={"checkbox"} checked={true} />;
}

// react/destructuring-assignment
type PropsType = { name: string; value: number };
function NoDestructuring(props: PropsType): React.ReactElement {
	return <div>{props.name}</div>;
}

// react/forward-ref-uses-ref
const ForwardRefNoRef = forwardRef<HTMLDivElement>(function ForwardRefNoRef() {
	return <div />;
});

// react/function-component-definition
const ArrowComponent = (props: PropsType): React.ReactElement => {
	return <div>{props.name}</div>;
};

// react/hook-use-state
function BadUseState(): React.ReactElement {
	const [value, value2] = useState(0);

	return <div>{value + value2}</div>;
}

// react/iframe-missing-sandbox
function UnsafeIframe(): React.ReactElement {
	return <iframe src={"https://example.com"} />;
}

// react/jsx-child-element-spacing
function ChildSpacing(): React.ReactElement {
	return (
		<div>
			<span>{"Hello"}</span>
			{"world"}
		</div>
	);
}

// react/jsx-curly-brace-presence
function NoCurlyBraces(): React.ReactElement {
	return <div className="no-curlies">text without curlies</div>;
}

// react/jsx-handler-names
function BadHandlerName(): React.ReactElement {
	const clickHandler = (): void => {};

	return <button onClick={clickHandler} />;
}

// react/jsx-no-bind
function BindInJsx(): React.ReactElement {
	function handleClick(): void {}

	return <button onClick={handleClick.bind(null)} />;
}

// react/jsx-no-constructed-context-values
const MyContext = createContext({});
function ConstructedContext(): React.ReactElement {
	return (
		<MyContext.Provider value={{ key: "value" }}>{null}</MyContext.Provider>
	);
}

// react/jsx-no-script-url
function ScriptUrl(): React.ReactElement {
	return <a href={"javascript:void(0)"}>{"link"}</a>;
}

// react/jsx-no-undef
function UndefinedComponent(): React.ReactElement {
	return <UndefinedComp />;
}

// react/jsx-pascal-case
function lowercase_component(): React.ReactElement {
	return <div />;
}

// react/no-access-state-in-setstate
class AccessStateInSetState extends React.Component<{}, { count: number }> {
	state = { count: 0 };

	increment(): void {
		this.setState({ count: this.state.count + 1 });
	}

	render(): React.ReactElement {
		return <div>{this.state.count}</div>;
	}
}

// react/no-adjacent-inline-elements
function AdjacentInline(): React.ReactElement {
	return (
		<div>
			<span>{"one"}</span>
			<span>{"two"}</span>
		</div>
	);
}

// react/no-arrow-function-lifecycle
class ArrowLifecycle extends React.Component {
	componentDidMount = (): void => {};

	render(): React.ReactElement {
		return <div />;
	}
}

// react/no-deprecated
class DeprecatedMethods extends React.Component {
	componentWillMount(): void {}

	render(): React.ReactElement {
		return <div />;
	}
}

// react/no-did-mount-set-state
class SetStateInDidMount extends React.Component<{}, { value: number }> {
	state = { value: 0 };

	componentDidMount(): void {
		this.setState({ value: 1 });
	}

	render(): React.ReactElement {
		return <div>{this.state.value}</div>;
	}
}

// react/no-did-update-set-state
class SetStateInDidUpdate extends React.Component<{}, { value: number }> {
	state = { value: 0 };

	componentDidUpdate(): void {
		this.setState({ value: 1 });
	}

	render(): React.ReactElement {
		return <div>{this.state.value}</div>;
	}
}

// react/no-direct-mutation-state
class DirectMutation extends React.Component<{}, { value: number }> {
	state = { value: 0 };

	mutate(): void {
		this.state.value = 1;
	}

	render(): React.ReactElement {
		return <div>{this.state.value}</div>;
	}
}

// react/no-find-dom-node
class FindDomNode extends React.Component {
	componentDidMount(): void {
		// eslint-disable-next-line react/no-find-dom-node
		const node = React.findDOMNode(this);

		console.log(node);
	}

	render(): React.ReactElement {
		return <div />;
	}
}

// react/no-invalid-html-attribute
function InvalidHtmlAttr(): React.ReactElement {
	return <a rel={"invalid"}>{"link"}</a>;
}

// react/no-is-mounted
class IsMounted extends React.Component {
	checkMounted(): boolean {
		return this.isMounted();
	}

	render(): React.ReactElement {
		return <div />;
	}
}

// react/no-object-type-as-default-prop
type ObjectPropType = { config: { value: number } };
function ObjectDefaultProp({
	config = { value: 1 },
}: ObjectPropType): React.ReactElement {
	return <div>{config.value}</div>;
}

// react/no-redundant-should-component-update
class RedundantShouldUpdate extends React.PureComponent {
	shouldComponentUpdate(): boolean {
		return true;
	}

	render(): React.ReactElement {
		return <div />;
	}
}

// react/no-string-refs
class StringRefs extends React.Component {
	render(): React.ReactElement {
		return <div ref={"myRef"} />;
	}
}

// react/no-this-in-sfc
function ThisInSfc(): React.ReactElement {
	return <div>{this.props}</div>;
}

// react/no-typos
class Typos extends React.Component {
	static defaultprops = {};

	render(): React.ReactElement {
		return <div />;
	}
}

// react/no-unescaped-entities
function UnescapedEntities(): React.ReactElement {
	return <div>{'Don\'t use quotes like this: "text"'}</div>;
}

// react/no-unsafe
class UnsafeLifecycle extends React.Component {
	UNSAFE_componentWillMount(): void {}

	render(): React.ReactElement {
		return <div />;
	}
}

// react/no-unstable-nested-components
function UnstableNested(): React.ReactElement {
	function NestedComponent(): React.ReactElement {
		return <div />;
	}

	return <NestedComponent />;
}

// react/no-unused-class-component-methods
class UnusedMethods extends React.Component {
	unusedMethod(): void {}

	render(): React.ReactElement {
		return <div />;
	}
}

// react/no-unused-prop-types
type UnusedPropsType = { used: string; unused: string };
function UnusedProps({ used }: UnusedPropsType): React.ReactElement {
	return <div>{used}</div>;
}

// react/no-unused-state
class UnusedState extends React.Component<
	{},
	{ used: number; unused: number }
> {
	state = { used: 0, unused: 0 };

	render(): React.ReactElement {
		return <div>{this.state.used}</div>;
	}
}

// react/no-will-update-set-state
class SetStateInWillUpdate extends React.Component<{}, { value: number }> {
	state = { value: 0 };

	UNSAFE_componentWillUpdate(): void {
		this.setState({ value: 1 });
	}

	render(): React.ReactElement {
		return <div>{this.state.value}</div>;
	}
}

// react/prefer-es6-class
const CreateClassComponent = React.createClass({
	render(): React.ReactElement {
		return <div />;
	},
});

// react/prefer-stateless-function
class StatelessAsClass extends React.Component<{ name: string }> {
	render(): React.ReactElement {
		return <div>{this.props.name}</div>;
	}
}

// react/require-render-return
class NoRenderReturn extends React.Component {
	render(): void {
		<div />;
	}
}

// react/sort-comp (render not in correct position)
class WrongSortOrder extends React.Component {
	render(): React.ReactElement {
		return <div />;
	}

	componentDidMount(): void {}
}

// react/state-in-constructor
class StateOutsideConstructor extends React.Component<{}, { value: number }> {
	state = { value: 0 };

	render(): React.ReactElement {
		return <div>{this.state.value}</div>;
	}
}

// react/style-prop-object
function StyleString(): React.ReactElement {
	return <div style={"color: red"} />;
}

export {
	CheckedInput,
	NoDestructuring,
	ForwardRefNoRef,
	ArrowComponent,
	BadUseState,
	UnsafeIframe,
	ChildSpacing,
	NoCurlyBraces,
	BadHandlerName,
	BindInJsx,
	ConstructedContext,
	ScriptUrl,
	UndefinedComponent,
	lowercase_component,
	AccessStateInSetState,
	AdjacentInline,
	ArrowLifecycle,
	DeprecatedMethods,
	SetStateInDidMount,
	SetStateInDidUpdate,
	DirectMutation,
	FindDomNode,
	InvalidHtmlAttr,
	IsMounted,
	ObjectDefaultProp,
	RedundantShouldUpdate,
	StringRefs,
	ThisInSfc,
	Typos,
	UnescapedEntities,
	UnsafeLifecycle,
	UnstableNested,
	UnusedMethods,
	UnusedProps,
	UnusedState,
	SetStateInWillUpdate,
	CreateClassComponent,
	StatelessAsClass,
	NoRenderReturn,
	WrongSortOrder,
	StateOutsideConstructor,
	StyleString,
};
