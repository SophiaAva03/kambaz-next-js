export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        This is my assignment editor for A1.
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assignment-group">Assignment group</label>
          </td>
          <td>
            <select id="wd-assignment-group">
                <option value="ASSIGNMENTS">Assignments</option>
                <option value="QUIZZES">Quizzes</option>
                <option value="EXAMS">Exams</option>
                <option value="PROJECTS">Projects</option>
          </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
                <option value="PERCENTAGE">Percentage</option>
                <option value="FRACTION">Fraction</option>
          </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
                <option value="ONLINE">Online</option>
                <option value="OFFLINE">Offline</option>
                <option value="EXTERNAL">External</option>
          </select>
          </td>
        </tr>
        <br />
        <tr>
            <td></td>
            <td align="left" valign="top">
                <label htmlFor="wd-online-entry-options">Online Entry Options</label>
            </td>
        </tr>
        <tr> 
            <td></td>
            <td>
                <input type="checkbox" name="check-online-entry" id="wd-chkbox-text-entry"/>
                <label htmlFor="wd-chkbox-text-entry">Text Entry</label><br/>
            </td>
        </tr>
        <tr> 
            <td></td>
            <td>
                <input type="checkbox" name="check-online-entry" id="wd-chkbox-website-url"/>
                <label htmlFor="wd-chkbox-website-url">Website URL</label><br/>
            </td>
        </tr>
        <tr> 
            <td></td>
            <td>
                <input type="checkbox" name="check-online-entry" id="wd-chkbox-media-recordings"/>
                <label htmlFor="wd-chkbox-media-recordings">Media Recordings</label><br/>
            </td>
        </tr>
        <tr> 
            <td></td>
            <td>
                <input type="checkbox" name="check-online-entry" id="wd-chkbox-student-annotation"/>
                <label htmlFor="wd-chkbox-student-annotation">Student Annotation</label><br/>
            </td>
        </tr>
        <tr> 
            <td></td>
            <td>
                <input type="checkbox" name="check-online-entry" id="wd-chkbox-file-uploads"/>
                <label htmlFor="wd-chkbox-file-uploads">File Uploads</label><br/>
            </td>
        </tr>
        <br />
        <tr>
            <td></td>
            <td align="left" valign="top">
                <label htmlFor="wd-assign-to">Assign to</label>
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <input id="wd-assign-to" defaultValue="Everyone" />
            </td>
        </tr>
        <br />
        <tr>
            <td></td>
            <td align="left" valign="top">
                <label htmlFor="wd-due">Due</label>
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <input type="date"
                    defaultValue="2000-01-21"
                    id="wd-due-date"/>
            </td>
        </tr>
        <br />
        <tr>
            <td align="left" valign="top">
                <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td align="left" valign="top">
                <label htmlFor="wd-available-until">Until</label>
            </td>
        </tr>
        <tr>
            <td align="left" valign="top">
                <input type="date"
                    defaultValue="2000-01-21"
                    id="wd-available-date"/>
            </td>
            <td align="left" valign="top">
                <input type="date"
                    defaultValue="2000-01-21"
                    id="wd-until-date"/>
            </td>
        </tr>
        <br />
        <br />
        <tr>
            <td></td>
            <td>
                <button id="wd-cancel">Cancel</button>
                <button id="wd-save">Save</button>
            </td>
        </tr>
      </table>
    </div>
);}
