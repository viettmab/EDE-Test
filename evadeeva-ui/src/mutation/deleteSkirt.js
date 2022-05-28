import client from "../client/client";
import {gql} from '@apollo/client';
const deleteSkirt = (item) => {
    client.mutate({
        mutation: gql`
            mutation Mutation($filesName: [String], $deleteSkirtId: Int!) {
                deleteFile(filesName: $filesName)
                deleteSkirt(id: $deleteSkirtId) {
                    id,
                    name,
                }
            }
        `,

        variables: {
            deleteSkirtId: item.id,
            filesName: item.img.map((item, index) => {return item.slice(item.length-16, item.length)}),
        }
    }).catch(err => {
        alert("Lỗi hệ thống, vui lòng thử lại!")});
}

export default deleteSkirt;
