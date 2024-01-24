import { useQuery } from '@tanstack/vue-query'
import { useProjectsStore } from '../../stores/projects'
import { DB } from '../../utils/appwrite'
import { DB_ID, COLLECTION_PROJECTS } from '../../utils/app.constants'

export const useGetProjectsData = async () => {
  const projectsStore = useProjectsStore()
  return useQuery({
    queryKey: ['projects'],
    queryFn: () => DB.listDocuments(DB_ID, COLLECTION_PROJECTS),
    select(data) {
      const result = data.documents.map(item => {
        const colors = JSON.parse(item.colors)
        const fonts = JSON.parse(item.fonts)
        return {...item, colors, fonts}
      })
      projectsStore.setProjects(result)
    }
  })
}