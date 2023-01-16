/**
 *
 * FormattedNumber
 *
 */
import { Fragment } from "react";
import { useIntl } from "react-intl";

interface NumberProps {
  value: number;
  Component?: any;
}
export function useFormattedNumber(value: number): string {
  const intl = useIntl();
  return intl.formatNumber(value);
}

function FormattedNumber({
  Component = Fragment,
  value,
  ...otherProps
}: NumberProps) {
  const content = useFormattedNumber(value);
  return <Component {...otherProps}>{content}</Component>;
}

export default FormattedNumber;
