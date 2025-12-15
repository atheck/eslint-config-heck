// Biome JSX Rules Test File
// Each section contains code that triggers the corresponding rule

import React, { forwardRef, useEffect, useState } from "react";

// ============================================
// A11Y (ACCESSIBILITY) RULES
// ============================================

// a11y/noAccessKey
function AccessKey(): React.ReactElement {
	return <div accessKey={"a"}>{"Content"}</div>;
}

// a11y/noAriaHiddenOnFocusable
function AriaHiddenFocusable(): React.ReactElement {
	return <button aria-hidden={"true"}>{"Click"}</button>;
}

// a11y/noAriaUnsupportedElements
function AriaUnsupportedElements(): React.ReactElement {
	return <meta aria-label={"meta"} />;
}

// a11y/noAutofocus
function Autofocus(): React.ReactElement {
	return <input autoFocus={true} />;
}

// a11y/noDistractingElements
function DistractingElements(): React.ReactElement {
	return <marquee>{"Scrolling text"}</marquee>;
}

// a11y/noHeaderScope
function HeaderScope(): React.ReactElement {
	return <div scope={"col"}>{"Header"}</div>;
}

// a11y/noInteractiveElementToNoninteractiveRole
function InteractiveToNoninteractive(): React.ReactElement {
	return <button role={"presentation"}>{"Button"}</button>;
}

// a11y/noLabelWithoutControl
function LabelWithoutControl(): React.ReactElement {
	return <label>{"Label without input"}</label>;
}

// a11y/noNoninteractiveElementInteractions
function NoninteractiveInteractions(): React.ReactElement {
	return <div onClick={() => {}}>{"Clickable div"}</div>;
}

// a11y/noNoninteractiveElementToInteractiveRole
function NoninteractiveToInteractive(): React.ReactElement {
	return <div role={"button"}>{"Div as button"}</div>;
}

// a11y/noNoninteractiveTabindex
function NoninteractiveTabindex(): React.ReactElement {
	return <div tabIndex={0}>{"Focusable div"}</div>;
}

// a11y/noPositiveTabindex
function PositiveTabindex(): React.ReactElement {
	return <input tabIndex={5} />;
}

// a11y/noRedundantAlt
function RedundantAlt(): React.ReactElement {
	return <img src={"photo.jpg"} alt={"Image of a photo"} />;
}

// a11y/noRedundantRoles
function RedundantRoles(): React.ReactElement {
	return <button role={"button"}>{"Button"}</button>;
}

// a11y/noStaticElementInteractions
function StaticElementInteractions(): React.ReactElement {
	return <span onClick={() => {}}>{"Clickable span"}</span>;
}

// a11y/noSvgWithoutTitle
function SvgWithoutTitle(): React.ReactElement {
	return (
		<svg>
			<circle cx={"50"} cy={"50"} r={"40"} />
		</svg>
	);
}

// a11y/useAltText
function NoAltText(): React.ReactElement {
	return <img src={"image.jpg"} />;
}

// a11y/useAnchorContent
function EmptyAnchor(): React.ReactElement {
	return <a href={"https://example.com"} />;
}

// a11y/useAriaActivedescendantWithTabindex
function AriaActivedescendant(): React.ReactElement {
	return <div aria-activedescendant={"item-1"}>{"List"}</div>;
}

// a11y/useAriaPropsForRole
function AriaPropsForRole(): React.ReactElement {
	return <input type={"checkbox"} role={"checkbox"} />;
}

// a11y/useAriaPropsSupportedByRole
function UnsupportedAriaProps(): React.ReactElement {
	return <input type={"text"} aria-checked={"true"} />;
}

// a11y/useButtonType
function ButtonWithoutType(): React.ReactElement {
	return <button>{"Click"}</button>;
}

// a11y/useFocusableInteractive
function FocusableInteractive(): React.ReactElement {
	return (
		<div role={"button"} tabIndex={-1}>
			{"Non-focusable button"}
		</div>
	);
}

// a11y/useHeadingContent
function EmptyHeading(): React.ReactElement {
	return <h1 />;
}

// a11y/useHtmlLang
function HtmlWithoutLang(): React.ReactElement {
	return <html />;
}

// a11y/useIframeTitle
function IframeWithoutTitle(): React.ReactElement {
	return <iframe src={"https://example.com"} />;
}

// a11y/useKeyWithClickEvents
function ClickWithoutKeyboard(): React.ReactElement {
	return <div onClick={() => {}}>{"Click only"}</div>;
}

// a11y/useKeyWithMouseEvents
function MouseWithoutKeyboard(): React.ReactElement {
	return <div onMouseOver={() => {}}>{"Mouse only"}</div>;
}

// a11y/useMediaCaption
function MediaWithoutCaption(): React.ReactElement {
	return <video src={"video.mp4"} />;
}

// a11y/useSemanticElements
function NonSemanticElements(): React.ReactElement {
	return <div role={"navigation"}>{"Nav content"}</div>;
}

// a11y/useValidAnchor
function InvalidAnchor(): React.ReactElement {
	return <a>{"No href"}</a>;
}

// a11y/useValidAriaProps
function InvalidAriaProps(): React.ReactElement {
	return <div aria-invalid-prop={"value"}>{"Content"}</div>;
}

// a11y/useValidAriaRole
function InvalidAriaRole(): React.ReactElement {
	return <div role={"invalid-role"}>{"Content"}</div>;
}

// a11y/useValidAriaValues
function InvalidAriaValues(): React.ReactElement {
	return <div aria-hidden={"invalid"}>{"Content"}</div>;
}

// a11y/useValidAutocomplete
function InvalidAutocomplete(): React.ReactElement {
	return <input type={"text"} autoComplete={"invalid"} />;
}

// a11y/useValidLang
function InvalidLang(): React.ReactElement {
	return <html lang={"invalid-lang"} />;
}

// ============================================
// CORRECTNESS RULES (JSX)
// ============================================

// correctness/noChildrenProp
function ChildrenProp(): React.ReactElement {
	return <div children={"Content"} />;
}

// correctness/noNestedComponentDefinitions
function NestedComponent(): React.ReactElement {
	function Inner(): React.ReactElement {
		return <span>{"Inner"}</span>;
	}

	return <Inner />;
}

// correctness/noReactPropAssignments
function PropAssignment(): React.ReactElement {
	const props = { value: 1 };

	props.value = 2;

	return <div {...props} />;
}

// correctness/noRenderReturnValue
function RenderReturnValue(): void {
	const result = ReactDOM.render(<div />, document.body);

	console.log(result);
}

// correctness/noVoidElementsWithChildren
function VoidElementWithChildren(): React.ReactElement {
	return <img>{"Children"}</img>;
}

// correctness/useExhaustiveDependencies
function ExhaustiveDeps(): React.ReactElement {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log(count);
	}, []);

	return <div>{count}</div>;
}

// correctness/useHookAtTopLevel
function HookNotAtTopLevel(condition: boolean): React.ReactElement {
	if (condition) {
		const [state] = useState(0);

		return <div>{state}</div>;
	}

	return <div />;
}

// correctness/useJsxKeyInIterable
function JsxKeyInIterable(): React.ReactElement {
	const items = [1, 2, 3];

	return (
		<ul>
			{items.map((item) => (
				<li>{item}</li>
			))}
		</ul>
	);
}

// ============================================
// NURSERY RULES (JSX)
// ============================================

// nursery/noJsxLiterals
function JsxLiterals(): React.ReactElement {
	return <div>literal text</div>;
}

// nursery/noReactForwardRef
const ForwardRefComponent = forwardRef<HTMLDivElement>(
	function ForwardRefComponent(props, ref) {
		return <div ref={ref} {...props} />;
	},
);

// nursery/noSyncScripts
function SyncScript(): React.ReactElement {
	return <script src={"script.js"} />;
}

// nursery/noScriptUrl
function ScriptUrl(): React.ReactElement {
	return <a href="javascript:alert('XSS')" />;
}

// nursery/noUnknownAttribute
function UnknownAttribute(): React.ReactElement {
	return <div unknownattr={"value"}>{"Content"}</div>;
}

// ============================================
// STYLE RULES (JSX)
// ============================================

// style/useSelfClosingElements
function NotSelfClosing(): React.ReactElement {
	return <div></div>;
}

// style/noUselessFragments
function UselessFragment(): React.ReactElement {
	return (
		<>
			<div>{"Single child"}</div>
		</>
	);
}

// ============================================
// SUSPICIOUS RULES (JSX)
// ============================================

// suspicious/noArrayIndexKey
function ArrayIndexKey(): React.ReactElement {
	const items = ["a", "b", "c"];

	return (
		<ul>
			{items.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
}

// suspicious/noCommentText
function CommentText(): React.ReactElement {
	return <div>// This looks like a comment</div>;
}

// suspicious/noDuplicateJsxProps
function DuplicateJsxProps(): React.ReactElement {
	return (
		<div className={"first"} className={"second"}>
			{"Content"}
		</div>
	);
}

// suspicious/noSuspiciousSemicolonInJsx
function SuspiciousSemicolon(): React.ReactElement {
	return <div>{"Content"};</div>;
}

// ============================================
// SECURITY RULES (JSX)
// ============================================

// security/noBlankTarget
function BlankTarget(): React.ReactElement {
	return (
		<a href={"https://example.com"} target={"_blank"}>
			{"Link"}
		</a>
	);
}

// security/noDangerouslySetInnerHtml
function DangerouslySetInnerHtml(): React.ReactElement {
	return (
		<div
			dangerouslySetInnerHTML={{ __html: "<script>alert('xss')</script>" }}
		/>
	);
}

// security/noDangerouslySetInnerHtmlWithChildren
function DangerousWithChildren(): React.ReactElement {
	return (
		<div dangerouslySetInnerHTML={{ __html: "<p>html</p>" }}>{"Children"}</div>
	);
}

export {
	AccessKey,
	AriaHiddenFocusable,
	AriaUnsupportedElements,
	Autofocus,
	DistractingElements,
	HeaderScope,
	InteractiveToNoninteractive,
	LabelWithoutControl,
	NoninteractiveInteractions,
	NoninteractiveToInteractive,
	NoninteractiveTabindex,
	PositiveTabindex,
	RedundantAlt,
	RedundantRoles,
	StaticElementInteractions,
	SvgWithoutTitle,
	NoAltText,
	EmptyAnchor,
	AriaActivedescendant,
	AriaPropsForRole,
	UnsupportedAriaProps,
	ButtonWithoutType,
	FocusableInteractive,
	EmptyHeading,
	HtmlWithoutLang,
	IframeWithoutTitle,
	ClickWithoutKeyboard,
	MouseWithoutKeyboard,
	MediaWithoutCaption,
	NonSemanticElements,
	InvalidAnchor,
	InvalidAriaProps,
	InvalidAriaRole,
	InvalidAriaValues,
	InvalidAutocomplete,
	InvalidLang,
	ChildrenProp,
	NestedComponent,
	PropAssignment,
	RenderReturnValue,
	VoidElementWithChildren,
	ExhaustiveDeps,
	HookNotAtTopLevel,
	JsxKeyInIterable,
	JsxLiterals,
	ForwardRefComponent,
	SyncScript,
	UnknownAttribute,
	NotSelfClosing,
	UselessFragment,
	ArrayIndexKey,
	CommentText,
	DuplicateJsxProps,
	SuspiciousSemicolon,
	BlankTarget,
	DangerouslySetInnerHtml,
	DangerousWithChildren,
};
