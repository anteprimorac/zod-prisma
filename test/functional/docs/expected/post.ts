import * as z from "zod"
import { Post } from "@prisma/client"

export const PostModel = z.object({
  /**
   * The unique identifier for the post
   * @default {Generated by database}
   */
  id: z.string().uuid(),
  /**
   * A brief title that describes the contents of the post
   */
  title: z.string().max(255, { message: "The title must be shorter than 256 characters" }),
  /**
   * The actual contents of the post.
   */
  contents: z.string().max(10240),
})
