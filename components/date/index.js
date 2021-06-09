import { parseISO, format } from "date-fns";
import fr from "date-fns/locale/fr";
import {useRouter} from "next/router";

export default function Date({ dateString }) {
  const {locale} = useRouter();
  const date = parseISO(dateString);

  return <time className="font-bold" dateTime={dateString}>
    {locale == "fr" ? format(date, "dd MMMM yyyy", {locale: fr}) : format(date, "MMMM dd yyyy")}
  </time>;
}
