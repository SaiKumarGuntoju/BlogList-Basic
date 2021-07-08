import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsData} = props
  return (
    <ul className="item-list-container">
      {blogsData.map(item => (
        <BlogItem item={item} key={item.id} />
      ))}
    </ul>
  )
}
export default BlogList
