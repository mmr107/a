import data from '../database/data.jason'
export default function Table() {
    return <table >
        <
        thead >
        <
        tr >
        <
        th >
        <
        span > Name < /span>  <
        /th>  <
        th >
        <
        span > Email < /span>  <
        /th> <
        th >
        <
        span > Salary < /span>  <
        /th> <
        th >
        <
        span > Birthday < /span>  <
        /th> <
        th >
        <
        span > Status < /span>  <
        /th> <
        th >
        <
        span > Action < /span>  <
        /th> <
        /tr>  <
        /thead>  <
        tbody > {
            data.map((obj, i) => < Tr {...obj }
                key = { i }
                />)}

                <
                /tbody>  <
                /table>
            }

            function Tr({ id, name }) {
                return ( <
                    tr >
                    <
                    td >
                    <
                    span > { name || "unknown" } < /span> <
                    /td> <
                    td >
                    <
                    span > { name || "unknown" } < /span> <
                    /td> <
                    td >
                    <
                    span > { name || "unknown" } < /span> <
                    /td> <
                    td >
                    <
                    span > { name || "unknown" } < /span> <
                    /td> <
                    td >
                    <
                    button > < span > Active < /span></button >
                    <
                    /td> <
                    /tr>
                )
            }