/**
 *
 * FormattedDate
 *
 */
import { Fragment } from "react";
import { FormatDateOptions, useIntl } from "react-intl";

interface DateProps {
  date?: any;
  opts?: FormatDateOptions;
}

export function useFormattedDate(payload: DateProps): string {
  const intl = useIntl();
  return intl.formatDate(payload.date, payload.opts);
}

const FormattedDate: React.FC<DateProps> = ({
  date = new Date(),
  opts = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    formatMatcher: "basic",
  },
  ...otherProps
}: DateProps) => {
  const content = useFormattedDate({ date, opts });
  return <Fragment {...otherProps}>{content}</Fragment>;
};

export default FormattedDate;
