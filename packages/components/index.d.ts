import * as React from 'react'
import { StyledComponent } from '@emotion/styled'
import { Interpolation } from '@emotion/react'
import { SpaceProps, ColorProps, MarginProps } from 'styled-system'
import { ResponsiveStyleValue, ThemeUIStyleObject } from '@theme-ui/css'

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

type Assign<T, U> = {
  [P in keyof (T & U)]: P extends keyof T
    ? T[P]
    : P extends keyof U
    ? U[P]
    : never
}

type ForwardRef<T, P> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>

export interface BoxOwnProps extends SpaceProps, ColorProps {
  as?: React.ElementType
  variant?: string
  css?: Interpolation<any>
  sx?: ThemeUIStyleObject
}
export interface BoxProps
  extends Assign<React.ComponentPropsWithRef<'div'>, BoxOwnProps> {}
/**
 * Use the Box component as a layout primitive to add margin, padding, and colors to content.
 * @see https://theme-ui.com/components/box
 */
export const Box: StyledComponent<BoxOwnProps, BoxProps>

export type FlexOwnProps = BoxOwnProps
export type FlexProps = BoxProps
/**
 * Use the Flex component to create flexbox layouts.
 * @see https://theme-ui.com/components/flex
 */
export const Flex: StyledComponent<FlexOwnProps, FlexProps>

export interface GridProps extends BoxProps {
  /**
   * Minimum width of child elements
   */
  width?: ResponsiveStyleValue<string | number>
  /**
   * Number of columns to use for the layout (cannot be used in conjunction with the width prop)
   */
  columns?: ResponsiveStyleValue<string | number>
  /**
   * Space between child elements
   */
  gap?: ResponsiveStyleValue<string | number>
  /**
   * Auto-repeat track behaviour (default is fit)
   */
  repeat?: 'fit' | 'fill'
}
/**
 * CSS grid layout component to arrange direct child elements in a tiled grid layout.
 * @see https://theme-ui.com/components/grid
 */
export const Grid: ForwardRef<HTMLDivElement, GridProps>

export interface ButtonProps
  extends Assign<React.ComponentPropsWithRef<'button'>, BoxOwnProps> {}
/**
 * Primitive button component with variants
 * @see https://theme-ui.com/components/button
 */
export const Button: ForwardRef<HTMLButtonElement, ButtonProps>

export interface LinkProps
  extends Assign<React.ComponentPropsWithRef<'a'>, BoxOwnProps> {}
/**
 * Link variants can be defined in the `theme.links` object.
 * By default the Link component will use styles defined in `theme.styles.a`.
 * @see https://theme-ui.com/components/link
 */
export const Link: ForwardRef<HTMLAnchorElement, LinkProps>

export type TextProps = BoxProps
/**
 * Primitive typographic component.
 *
 * Text style variants can be defined in the theme.text object.
 * @see https://theme-ui.com/components/text
 */
export const Text: ForwardRef<HTMLDivElement, BoxProps>

export interface ParagraphProps
  extends Assign<React.ComponentPropsWithRef<'p'>, BoxOwnProps> {}
/**
 * Primitive typographic component.
 *
 * Text style variants can be defined in the theme.text object.
 * The Paragraph component uses theme.text.paragraph as its default variant style.
 * @see https://theme-ui.com/components/paragraph
 */
export const Paragraph: ForwardRef<HTMLParagraphElement, ParagraphProps>

export interface HeadingProps
  extends Assign<React.ComponentPropsWithRef<'h2'>, BoxOwnProps> {}
/**
 * Primitive heading component, defaults to <h2>.
 *
 * Text style variants can be defined in the theme.text object.
 * The Heading component uses theme.text.heading as its default variant style.
 * @see https://theme-ui.com/components/heading
 */
export const Heading: ForwardRef<HTMLHeadingElement, HeadingProps>

export interface ImageProps
  extends Assign<React.ComponentPropsWithRef<'img'>, BoxOwnProps> {}
/**
 * Image style variants can be defined in the theme.images object.
 * @see https://theme-ui.com/components/image/
 */
export const Image: ForwardRef<HTMLImageElement, ImageProps>

export type CardProps = BoxProps
/**
 * Card style variants can be defined in the `theme.cards` object.
 * By default the Card component uses the `theme.cards.primary` variant.
 * @see https://theme-ui.com/components/card
 */
export const Card: ForwardRef<HTMLDivElement, CardProps>

export interface LabelProps
  extends Assign<React.ComponentPropsWithRef<'label'>, BoxOwnProps> {}
/**
 * Label variants can be defined in `theme.forms`
 * and the component uses the `theme.forms.label` variant by default.
 * @see https://theme-ui.com/components/label/
 */
export const Label: ForwardRef<HTMLLabelElement, LabelProps>

export interface InputProps
  extends Assign<React.ComponentPropsWithRef<'input'>, BoxOwnProps> {}
/**
 * Input variants can be defined in `theme.forms`
 * and the component uses the `theme.forms.input` variant by default.
 * @see https://theme-ui.com/components/input/
 */
export const Input: ForwardRef<HTMLInputElement, InputProps>

export interface SelectProps
  extends Assign<React.ComponentPropsWithRef<'select'>, BoxOwnProps> {
  arrow?: React.ReactElement
}
/**
 * Select variants can be defined in `theme.forms`
 * and the component uses the `theme.forms.select` variant by default.
 * @see https://theme-ui.com/components/select/
 */
export const Select: ForwardRef<HTMLSelectElement, SelectProps>

export interface TextareaProps
  extends Assign<React.ComponentPropsWithRef<'textarea'>, BoxOwnProps> {}
/**
 * Form textarea component
 *
 * Textarea variants can be defined in `theme.forms`
 * and the component uses the `theme.forms.textarea` variant by default.
 * @see https://theme-ui.com/components/textarea/
 */
export const Textarea: ForwardRef<HTMLTextAreaElement, TextareaProps>

export interface RadioProps
  extends Assign<React.ComponentPropsWithRef<'input'>, BoxOwnProps> {}
/**
 * Form radio input component
 *
 * Radio variants can be defined in `theme.forms` and the
 * component uses the `theme.forms.radio variant` by default.
 * @see https://theme-ui.com/components/radio/
 */
export const Radio: ForwardRef<HTMLInputElement, RadioProps>

export interface CheckboxProps
  extends Assign<React.ComponentPropsWithRef<'input'>, BoxOwnProps> {}
/**
 * Form checkbox input component
 *
 * Checkbox variants can be defined in `theme.forms` and the
 * component uses the `theme.forms.checkbox` variant by default.
 * @see https://theme-ui.com/components/checkbox/
 */
export const Checkbox: ForwardRef<HTMLInputElement, CheckboxProps>

export interface SliderProps
  extends Assign<React.ComponentPropsWithRef<'input'>, BoxOwnProps> {}
/**
 * Range input element
 *
 * Slider variants can be defined in the `theme.forms` object.
 * The Slider component uses `theme.forms.slider` as its default variant style.
 * @see https://theme-ui.com/components/slider/
 */
export const Slider: ForwardRef<HTMLInputElement, SliderProps>

export interface FieldOwnProps extends MarginProps {
  /**
   * Text for Label component
   */
  label: string
  /**
   * Used for the for, id, and name attributes
   */
  name: string
}
export type FieldProps<T extends React.ElementType> = FieldOwnProps &
  Omit<React.ComponentPropsWithRef<T>, 'as' | keyof FieldOwnProps> & {
    /**
     * form control to render, default Input
     */
    as?: T
  }

// `T` is far from unnecessary. We derive component props from it.
// tslint:disable-next-line no-unnecessary-generics
export function Field<
  T extends React.ElementType = React.ComponentType<InputProps>
>(props: FieldProps<T>): JSX.Element

export interface ProgressProps
  extends Assign<React.ComponentPropsWithRef<'progress'>, BoxOwnProps> {}
/**
 * @see https://theme-ui.com/components/progress/
 */
export const Progress: ForwardRef<HTMLProgressElement, ProgressProps>

export interface DonutProps
  extends Assign<
    Omit<
      React.ComponentPropsWithRef<'svg'>,
      'opacity' | 'color' | 'css' | 'sx' | 'max' | 'min'
    >,
    BoxOwnProps
  > {
  value: number
  min?: number
  max?: number
  title?: string
  size?: string | number
}
/**
 * Single value SVG donut chart
 * @see https://theme-ui.com/components/donut/
 */
export const Donut: ForwardRef<SVGSVGElement, DonutProps>

export interface SpinnerProps
  extends Assign<
    Omit<
      React.ComponentPropsWithRef<'svg'>,
      'opacity' | 'color' | 'css' | 'sx'
    >,
    BoxOwnProps
  > {
  size?: number | string
}
export const Spinner: ForwardRef<SVGSVGElement, SpinnerProps>

export interface AvatarProps extends ImageProps {
  size?: number | string
}
export const Avatar: ForwardRef<HTMLImageElement, AvatarProps>

export type BadgeProps = BoxProps
export const Badge: ForwardRef<HTMLDivElement, BadgeProps>

export interface CloseProps extends Omit<IconButtonProps, 'children'> {}
/**
 * Button with close (×) icon.
 *
 * The Close component renders as a <button> element by default.
 * Pass any button attributes as props to the component.
 *
 * Close component variants can be defined in the theme.buttons object.
 * The Close component uses theme.buttons.close as its default variant style.
 */
export const Close: ForwardRef<HTMLButtonElement, CloseProps>

export type AlertProps = BoxProps
/**
 * Component for displaying messages, notifications, or other application state.
 *
 * Alert variants can be defined in `theme.alerts`.
 * The Alert component uses `theme.alerts.primary` as its default variant.
 */
export const Alert: ForwardRef<HTMLDivElement, AlertProps>

export type DividerProps = BoxProps
/**
 * The Divider component reuses styles from `theme.styles.hr` as its default variant.
 */
export const Divider: ForwardRef<HTMLDivElement, DividerProps>

export interface EmbedProps
  extends Assign<React.ComponentPropsWithRef<'iframe'>, BoxOwnProps> {
  variant?: string
  ratio?: number
  src?: React.IframeHTMLAttributes<any>['src']
  frameBorder?: React.IframeHTMLAttributes<any>['frameBorder']
  allowFullScreen?: React.IframeHTMLAttributes<any>['allowFullScreen']
  allow?: React.IframeHTMLAttributes<any>['allow']
}
/**
 * Responsive iframe for video embeds.
 *
 * Embed variants can be defined anywhere in the theme object.
 *
 * @see https://theme-ui.com/components/embed
 */
export const Embed: ForwardRef<HTMLIFrameElement, EmbedProps>

export interface AspectRatioProps extends BoxProps {
  ratio?: number
}
/**
 * Component for maintaining a fluid-width aspect ratio
 * @see https://theme-ui.com/components/aspect-ratio
 */
export const AspectRatio: ForwardRef<HTMLDivElement, AspectRatioProps>

export interface AspectImageProps extends ImageProps {
  ratio?: number
}
/**
 * Image component constrained by as aspect ratio.
 * @see https://theme-ui.com/components/aspect-image
 */
export const AspectImage: ForwardRef<HTMLImageElement, AspectImageProps>

export type ContainerProps = BoxProps
/**
 * Centered, max-width layout component
 *
 * Container variants can be defined in the `theme.layout` object.
 * The Container component uses `theme.layout.container` as its default variant style.
 * @see https://theme-ui.com/components/container
 */
export const Container: ForwardRef<HTMLDivElement, ContainerProps>

export type NavLinkProps = LinkProps
/**
 * Link component for use in navigation
 *
 * NavLink variants can be defined in the `theme.links` object.
 * By default the NavLink component will use styles defined in `theme.links.nav`.
 * @see https://theme-ui.com/components/nav-link
 */
export const NavLink: ForwardRef<HTMLAnchorElement, NavLinkProps>

export type MessageProps = BoxProps
/**
 * Styled Box component for callouts and inline messages
 *
 * Message variants can be defined in the theme.messages object.
 * @see https://theme-ui.com/components/message
 */
export const Message: ForwardRef<HTMLDivElement, MessageProps>

export interface IconButtonProps
  extends Assign<React.ComponentPropsWithRef<'button'>, BoxOwnProps> {
  size?: number | string
}
/**
 * Transparent button for SVG icons
 *
 * IconButton variants can be defined in the `theme.buttons` object.
 * By default the IconButton component will use styles defined in `theme.buttons.icon`.
 *
 * @see https://theme-ui.com/components/icon-button
 */
export const IconButton: ForwardRef<HTMLButtonElement, IconButtonProps>

export type MenuButtonProps = IconButtonProps
/**
 * MenuButton variants can be defined in the `theme.buttons` object.
 * By default the MenuButton component will use styles defined in `theme.buttons.menu`.
 *
 * @see https://theme-ui.com/components/menu-button
 */
export const MenuButton: ForwardRef<HTMLButtonElement, MenuButtonProps>

/**
 * Form switch component
 *
 * Switch variants can be defined in `theme.forms`
 * and the component uses the `theme.forms.switch` variant by default.
 */
export const Switch: ForwardRef<HTMLInputElement, SwitchProps>

export interface SwitchProps
  extends Assign<React.ComponentProps<'input'>, BoxOwnProps> {
  label?: string
}
