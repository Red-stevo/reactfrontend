/*
* Fragments in react hel group child components together.
* The help avoid unnecessary <div> elements.
* */
import Table from "./Table";
const Fragment = () =>
{
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <td>Activity</td>
                    <td>Status</td>
                </tr>
                </thead>
                <tbody>
                    <Table></Table>
                </tbody>
            </table>
        </div>
    )
}

export default Fragment;