/**
 *
 * FormattedMessage
 *
 */

import { Fragment } from "react";
import { useIntl } from "react-intl";

export function useFormattedMessage(props: {
  id: string;
  values?: any;
  defaultMessage: string;
}): string {
  const { id, values = {}, defaultMessage } = props || {};
  const intl = useIntl();
  if (!id) {
    return "";
  }
  return intl.formatMessage({ id, defaultMessage }, values);
}

interface Props {
  id: string;
  values?: any;
  Component?: any;
  defaultMessage: string;
  [x: string]: any;
}

const FormattedMessage: React.FC<Props> = ({
  Component = Fragment,
  id,
  defaultMessage,
  values,
  ...otherProps
}) => (
  <Component {...otherProps}>
    {useFormattedMessage({ id, defaultMessage, values })}
  </Component>
);

export default FormattedMessage;
