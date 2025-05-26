

import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
   {/* <Typography>Amet officia sunt ullamco aute aliqua dolore aliquip tempor occaecat sit ullamco ad ad.</Typography> */}
{/*   
  <NothingSelectedView/> */}
  <NoteView/>
    </JournalLayout>
  )
}
