import { CheckCircleIcon, ChevronRightIcon, EnvelopeIcon } from "@heroicons/react/20/solid"
import SmallSetPagination from "components/pagination/SmallSetPagination"
import BlogCardSearch from "../BlogCardSearch"
import CategoriesHeader from "../CategoriesHeader"

function BlogList({posts,get_blog_list_page,count, term}){

    return(
      
    <div className="overflow-hidden px-8 bg-white">
      <ul className="divide-y space-y-8 gap-8  divide-gray-200">
        {posts&&posts.map((post,index) => (
          <BlogCardSearch data={post} key={index} index={index}/>
        ))}
      </ul>
      <SmallSetPagination list_page={get_blog_list_page} term={term} list={posts} count={count} />
    </div>
    )
}
export default BlogList