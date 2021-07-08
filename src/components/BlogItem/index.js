import './index.css'

const BlogItem = props => {
  const {item} = props
  const {title, description, publishedDate} = item
  return (
    <div className="item-container">
      <div className="item-title-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="para">{description}</p>
    </div>
  )
}

export default BlogItem
