'use server';

import { getAuthUser } from './helpers';
import db from '@/utils/db';
import { renderError } from './helpers';
import { redirect } from 'next/navigation';
import { imageSchema, productSchema, validateWithZodSchema } from './schemas';
import { uploadImage } from './supabase';
import { deleteImage } from './supabase';
import { revalidatePath } from 'next/cache';
import { getAdminUser } from './helpers';

export const createProductAction = async (
  prevState: unknown,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const data = Object.fromEntries(formData);
    const file = formData.get('image') as File;
    const validatedData = validateWithZodSchema(productSchema, data);
    const validatedImageFile = validateWithZodSchema(imageSchema, {
      image: file,
    });
    const imagePath = await uploadImage(validatedImageFile.image);

    await db.product.create({
      data: {
        ...validatedData,
        image: imagePath,
        clerkId: user.id,
      },
    });
  } catch (error) {
    return renderError(error);
  }

  redirect('/admin/products');
};

export const deleteProductAction = async (prevState: { productId: string }) => {
  const { productId } = prevState;
  await getAdminUser();
  try {
    const product = await db.product.delete({
      where: {
        id: productId,
      },
    });
    await deleteImage(product.image);
    revalidatePath('/admin/products');
    return { message: 'product removed' };
  } catch (error) {
    return renderError(error);
  }
};

export const updateProductAction = async (
  prevState: unknown,
  formData: FormData
) => {
  await getAdminUser();
  try {
    const productId = formData.get('id') as string;
    const data = Object.fromEntries(formData);
    const validatedData = validateWithZodSchema(productSchema, data);

    await db.product.update({
      where: {
        id: productId,
      },
      data: {
        ...validatedData,
      },
    });
    revalidatePath(`/admin/products/${productId}/edit`);
    return { message: 'Product updated successfully' };
  } catch (error) {
    return renderError(error);
  }
};

export const updateProductImageAction = async (
  prevState: unknown,
  formData: FormData
) => {
  await getAuthUser();

  try {
    const image = formData.get('image') as File;
    const productId = formData.get('id') as string;
    const oldImageUrl = formData.get('url') as string;
    const validatedImageFile = validateWithZodSchema(imageSchema, { image });
    const imagePath = await uploadImage(validatedImageFile.image);

    await deleteImage(oldImageUrl);

    await db.product.update({
      where: {
        id: productId,
      },
      data: {
        image: imagePath,
      },
    });

    revalidatePath(`/admin/products/${productId}/edit`);
    return { message: 'Product image updated successfully' };
  } catch (error) {
    return renderError(error);
  }
};
