export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <br />
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section, Links to each of the lab
        assignments, Link to the Kanbas application Links to all relevant source
        code repositoeis the kanbas application, should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <table cellPadding={5}>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option>ASSIGNMENTS</option>
              <option>QUIZES</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option>Online</option>
              <option>Offline</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label htmlFor="wd-submission-type">Online Entry Options</label>
            <br />
            <input type="checkbox" name="check-genre" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" name="check-genre" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="check-genre"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="check-genre"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input type="checkbox" name="check-genre" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
            <br />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <input id="wd-assign-to" defaultValue="Everyone" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input type="date" id="wd-due-date" value="2024-05-13" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <table>
              <tr>
                <td>
                  <label htmlFor="wd-available-from">Available from</label>
                </td>
                <td>
                  <label htmlFor="wd-available-until">Until</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="date"
                    id="wd-available-from"
                    value="2024-05-06"
                  />
                </td>
                <td>
                  <input
                    type="date"
                    id="wd-available-until"
                    value="2024-05-20"
                  />
                </td>
              </tr>
            </table>
            <br />
          </td>
        </tr>
      </table>
      <hr />
      <table width="100%">
        <tbody>
          <tr>
            <td align="right">
              <button>Cancel</button>
              <button>Save</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
